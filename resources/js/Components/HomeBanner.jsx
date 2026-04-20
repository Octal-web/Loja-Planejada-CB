import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { Reveal } from './Reveal';
import CornerField from './CornerField';
import DrawPath from './DrawPath';
import { CustomLink } from './CustomLink';
import HomeFieldPaths from './HomeFieldPaths';

import promoLogo from '../content/display/promo-logo.png';
import bannerBg from '../content/display/home-banner.jpg';
import promoAward from '../content/display/promo-award.png';
import StarsColumn from './StarsColumn';

const HomeBanner = () => {
    const fieldRef = useRef(null);

    useEffect(() => {
        const el = fieldRef.current;
        if (!el) return;

        gsap.set(el, {
            rotateX: 0,
            rotateY: 0,
            transformPerspective: 2000,
            transformOrigin: "center center"
        });

        let tween;

        const move = (e) => {
            const { innerWidth, innerHeight } = window;

            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;

            let percentX = (e.clientX - centerX) / centerX;
            let percentY = (e.clientY - centerY) / centerY;

            percentX = Math.pow(Math.abs(percentX), 1.5) * Math.sign(percentX);
            percentY = Math.pow(Math.abs(percentY), 1.5) * Math.sign(percentY);

            const maxRotate = 2;

            tween = gsap.to(el, {
                rotateX: percentY * -maxRotate,
                rotateY: percentX * maxRotate,
                duration: 0.6,
                ease: "power3.out",
                overwrite: "auto"
            });
        };

        const reset = () => {
            tween = gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.6,
                ease: "power3.out",
                overwrite: "auto"
            });
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseleave", reset);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseleave", reset);
        };
    }, []);

    return (
        <section className="relative bg-primary [perspective:1000px] overflow-hidden">
            <div
                className="absolute inset-0 bg-[length:auto_100%] lg:bg-[length:auto_130%] bg-[60%_center] lg:bg-center opacity-50"
                style={{ backgroundImage: `url(${bannerBg})` }}
            />

            <HomeFieldPaths />

            <div className="relative container max-w-large">
                <div className="py-16">

                    <div
                        ref={fieldRef}
                        className="absolute inset-4 top-24 bottom-20 will-change-transform transform-gpu"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <CornerField className="top-0 right-0 w-30" />
                        <CornerField className="top-0 left-0 -rotate-90 w-30" />
                        <StarsColumn className="top-1/2 left-0 -translate-y-1/2" />
                        <CornerField className="bottom-0 left-0 -rotate-180 w-30" />
                        <StarsColumn className="top-1/2 right-0 -translate-y-1/2 rotate-180" />
                        <CornerField className="bottom-0 right-0 rotate-90 w-30" />
                    </div>

                    <div className="relative flex items-center min-h-[calc(100vh_-_108px)] lg:min-h-[calc(100dvh_-_232px)]">

                        <Reveal className="-ml-6 py-10 w-full lg:w-1/2" direction="right" delay={2}>
                            <div className="relative w-fit mx-auto mt-12 lg:mt-8 2xl:mt-5 mb-16">
                                <DrawPath className="absolute -bottom-5 left-1/2 w-full -translate-x-1/2" />
                                <img src={promoLogo} className="relative pointer-events-none" alt="Promoção Jogada Planejada" />
                            </div>

                            <p className="text-white text-2xl 2xl:text-[28px] text-center mb-20">
                                Nos projetos acima de <span className="text-secondary font-bold">R$ 49.990,00</span><br />
                                você ganha uma <span className="text-secondary font-bold">Smart TV Samsung 50”</span>
                            </p>

                            <div className="ml-24 -mr-16 grid grid-cols-2 gap-6">
                                <CustomLink
                                    href={route('Home.index')}
                                    to="#solicite-seu-projeto"
                                    className="inline-block bg-secondary border-2 border-secondary rounded-full w-full text-center tracking-tight px-8 py-4 font-semibold text-lg transition-all hover:bg-yellow-500 hover:border-yellow-500"
                                >
                                    Quero minha Smart TV
                                </CustomLink>

                                <CustomLink
                                    href={route('Home.index')}
                                    to="#programa"
                                    className="inline-block bg-transparent border-2 border-white text-white rounded-full w-full text-center tracking-tight px-8 py-4 font-semibold text-lg transition-all hover:text-primary hover:bg-yellow-500 hover:border-yellow-500"
                                >
                                    Saiba mais sobre a campanha
                                </CustomLink>
                            </div>
                        </Reveal>

                        <Reveal className="-mr-12" direction="left" delay={3}>
                            <img
                                src={promoAward}
                                alt="Premiação Promoção Jogada Planejada"
                                className="w-[95%] max-w-[800px]"
                            />
                        </Reveal>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;