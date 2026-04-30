import gsap from "gsap";
import { useEffect, useRef } from "react";

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
            transformOrigin: "center center",
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
                overwrite: "auto",
            });
        };

        const reset = () => {
            tween = gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.6,
                ease: "power3.out",
                overwrite: "auto",
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

            <div className="relative container max-w-large">
                <HomeFieldPaths />
                
                <div className="py-16 py-2 2xl:py-16">
                    <div
                        ref={fieldRef}
                        className="absolute inset-4 top-24 bottom-20 will-change-transform transform-gpu"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="absolute -inset-14 -top-36 -bottom-44 md:inset-0 max-md:scale-75">
                            <CornerField className="top-0 right-0 w-30" />
                            <CornerField className="top-0 left-0 -rotate-90 w-30" />
                            <StarsColumn className="max-md:hidden top-1/2 left-0 -translate-y-1/2" />
                            <CornerField className="bottom-0 left-0 -rotate-180 w-30" />
                            <StarsColumn className="max-md:hidden top-1/2 right-0 -translate-y-1/2 rotate-180" />
                            <CornerField className="bottom-0 right-0 rotate-90 w-30" />
                        </div>
                    </div>

                    <div className="relative flex flex-col md:mx-10 lg:mx-auto md:flex-row md:gap-10 lg:gap-0 items-center min-h-[calc(100vh_-_108px)] lg:min-h-[calc(100dvh_-_232px)]">
                        <Reveal
                            className="md:-ml-6 py-10 w-[305px] md:w-1/2"
                            direction="right"
                            delay={2}
                        >
                            <div className="relative w-fit mx-auto mt-10 lg:mt-8 2xl:mt-5 mb-10 lg:mb-16 max-md:scale-100 max-[1440px]:scale-90 origin-right">
                                <div className="md:hidden flex gap-2 justify-center mb-7">
                                    {Array.from({ length: 6 }).map((__, i) => (
                                        <svg
                                            key={i}
                                            className="fill-secondary w-3.5"
                                            viewBox="0 0 29.604 29.693"
                                        >
                                            <path
                                                d="M132.343,0l-3.495,11.342H117.541l9.148,7.009L123.2,29.693l9.147-7.009,9.147,7.009L138,18.351l9.147-7.009H135.838Z"
                                                transform="translate(-117.541)"
                                            ></path>
                                        </svg>
                                    ))}
                                </div>
                                <DrawPath className="absolute -bottom-3 lg:-bottom-5 left-1/2 w-full -translate-x-1/2" />
                                <img
                                    src={promoLogo}
                                    className="relative pointer-events-none"
                                    alt="Promoção Jogada Planejada"
                                />
                            </div>

                            <p className="text-white text-sm lg:text-2xl 2xl:text-[28px] text-center mb-7 lg:mb-20">
                                Nos projetos acima de{" "}
                                <span className="text-secondary font-bold">
                                    R$ 49.990,00
                                </span>
                                <br />
                                você ganha uma{" "}
                                <span className="text-secondary font-bold">
                                    Smart TV Samsung 50”
                                </span>
                            </p>

                            <Reveal
                                className="md:hidden flex flex-col items-center mb-10"
                                direction="left"
                                delay={3}
                            >
                                <img
                                    src={promoAward}
                                    alt="Premiação Promoção Jogada Planejada"
                                    className="w-[105%] max-w-[800px]"
                                />
                            </Reveal>

                            <div className="mb-8 lg:mb-0 lg:ml-24 lg:-mr-16 xl:grid lg:grid-cols-2 gap-3 md:gap-6 flex flex-col items-center">
                                <CustomLink
                                    href={route("Home.index")}
                                    to="#solicite-seu-projeto"
                                    className="inline-block bg-secondary border-2 border-secondary rounded-full w-[280px] lg:w-full text-center tracking-tight xl:px-2 2xl:px-8 py-4 font-semibold text-sm xl:text-base 2xl:text-lg transition-all hover:bg-yellow-500 hover:border-yellow-500"
                                >
                                    Quero minha Smart TV
                                </CustomLink>

                                <CustomLink
                                    href={route("Home.index")}
                                    to="#campanha"
                                    className="inline-block bg-transparent border-2 border-white text-white rounded-full w-[280px] lg:w-full text-center tracking-tight xl:px-2 2xl:px-8 py-4 font-semibold text-sm xl:text-base 2xl:text-lg transition-all hover:text-primary hover:bg-yellow-500 hover:border-yellow-500"
                                >
                                    Saiba mais sobre a campanha
                                </CustomLink>
                            </div>
                        </Reveal>

                        <Reveal
                            className="hidden md:block md:-mr-40 lg:-mr-12"
                            direction="left"
                            delay={3}
                        >
                            <img
                                src={promoAward}
                                alt="Premiação Promoção Jogada Planejada"
                                className="w-[85%] lg:w-[95%] max-w-[800px] max-md:scale-100 max-[1440px]:scale-90 origin-right"
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
