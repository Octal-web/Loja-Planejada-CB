import React, { useState, useEffect, useRef } from 'react';
import { Link, Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import Lenis from '@studio-freight/lenis';
import { CookieModal } from '@/Components/CookieModal'; 
import { CustomLink } from '@/Components/CustomLink'; 

import logo from '../site/img/logo.png';

const DefaultLayout = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { controller, action, notifyCookie, rejectCookie } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [trackingEnabled, setTrackingEnabled] = useState(false);
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current.destroy();
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const acceptCookies = () => {
        setTrackingEnabled(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            setIsAtTop(currentScrollY <= 20);
            
            if (!isMenuOpen) {
                if (currentScrollY > 200) {
                    setIsVisible(currentScrollY < lastScrollY);
                } else {
                    setIsVisible(true);
                }
            }
            
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMenuOpen]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (notifyCookie || trackingEnabled) {
    //             const script = document.createElement('script');
    //             script.innerHTML = `
    //                 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //                 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //                 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //                 })(window,document,'script','dataLayer','GTM-WCFTFZF');
    //             `;
    //             document.head.appendChild(script);

    //             const meta = document.createElement('meta');
    //             meta.name = 'facebook-domain-verification';
    //             meta.content = 'agtpvwwr9a1d8qgyh9htrp013y0r0a';
    //             document.head.appendChild(meta);

    //             const noscript = document.createElement('noscript');
    //             noscript.innerHTML = `
    //                 <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCFTFZF" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    //             `;
    //             document.body.appendChild(noscript);
    //         }
    //     }, 100);
    // }, [notifyCookie, trackingEnabled]);

    const menuItems = [
        { name: "A campanha", route: "Home.index", to: "#campanha", external: false },
        { name: "Lojas Participantes", route: "Home.index", to: "#lojas-participantes", external: false },
        { name: "Regulamento", route: "Regulamento.index", external: false }
    ];

    return (
        <>
            <Head>
                <title>Jogada Planejada - Casa Brasileira</title>
                <meta name="description" content="Nas compras acima de R$ 10 mil, ganhe 2,5% do valor em cashback para resgatar em prêmios" />

                <meta name="twitter:card" content="summary"/>

                <meta property="og:url" content={window.location.pathname} />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Jogada Planejada - Casa Brasileira" />
                <meta property="og:description" content="Nas compras acima de R$ 10 mil, ganhe 2,5% do valor em cashback para resgatar em prêmios" />
                <meta property="og:image" content={`/content/pages/mainCB.jpg`} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="768" />

                <meta name="robots" content="index, follow"/>

                <link rel="icon" href={`/favicon.ico`} type="image/x-icon" />
            </Head>

            <header className={`header fixed top-0 left-0 right-0 bg-white border-b-4 border-secondary z-[20] transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0 shadow-md' : '-translate-y-full'}`}>
                <div className={`fixed inset-0 bg-black lg:hidden duration-300 ease-out ${isMenuOpen ? 'opacity-30' : 'opacity-0 h-0'}`} onClick={() => {setIsMenuOpen(false)}}></div>
                <div className="container max-w-medium">
                    <div className="flex items-center justify-between">
                        <div className="relative z-[1] flex items-center justify-between w-full h-24 lg:h-28 2xl:h-30">
                            <h1 className="absolute top-8 z-[1] left-[6%]">
                                <Link href={route('Home.index')} className="">
                                    <img src={logo} alt="Logo" className={`block max-w-30 lg:max-w-40 min-[1760px]:max-w-44 transition-all ${isVisible ? 'translate-y-0' : '-translate-y-1/2'}`} />
                                </Link>
                            </h1>

                            <button className={`fixed z-[1] top-0 left-0 w-screen h-screen lg:hidden bg-black transition-all  ${isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />

                            <div className={`fixed z-[1] lg:relative bg-secondary bg-opacity-70 max-lg:backdrop-blur-sm lg:bg-transparent lg:ml-auto top-0 right-0 ${!isMenuOpen ? 'translate-x-full lg:translate-x-0' : 'translate-x-0'} lg:left-auto lg:top-auto flex flex-col lg:flex-row lg:items-center justify-center md:justify-end w-11/12 h-screen md:h-auto md:mt-0.5 2xl:mt-1.5 transition-all ease-out duration-500`}>
                                <nav className="relative">
                                    <ul className="flex flex-col lg:flex-row items-center lg:justify-center gap-6 xl:gap-8 2xl:gap-12 relative">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                {item.external ? (
                                                    <a
                                                        href={item.route}
                                                        className="text-primary lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-tight transition-all hover:opacity-80"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ) : item.to ? (
                                                    <CustomLink
                                                        href={route(item.route)}
                                                        to={item.to}
                                                        className="text-primary lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-tight transition-all hover:opacity-80"
                                                        closeOnClick={setIsMenuOpen}
                                                    >
                                                        {item.name}
                                                    </CustomLink>
                                                ) : (
                                                    <Link
                                                        href={route(item.route)}
                                                        to={item.to}
                                                        className="text-primary lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-tight transition-all hover:opacity-80"
                                                        closeOnClick={setIsMenuOpen}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}

                                        <li>
                                            <CustomLink
                                                href={route('Home.index')}
                                                to="#solicite-seu-projeto"
                                                className="flex gap-2 max-lg:block text-primary lg:text-sm xl:text-base 2xl:text-lg tracking-tight bg-secondary border-2 border-secondary fill-primary rounded-full px-4 xl:px-10 py-3.5 font-semibold transition-all hover:bg-primary hover:border-primary hover:text-secondary hover:fill-secondary"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 15.35 13.36">
                                                    <path d="M8.67,13.36l-1.15-1.13,4.73-4.73H0v-1.64H12.25L7.52,1.15l1.15-1.15,6.68,6.68-6.68,6.68Z"/>
                                                </svg>
                                                Solicite seu projeto
                                            </CustomLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <button className="lg:hidden relative ml-auto z-[2]" onClick={toggleMenu}>
                                <div className="flex items-center">
                                    <div className="relative w-8 h-[21px]">
                                        <div
                                            className={`absolute top-0 h-[3px] w-8 bg-primary rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 !top-[10px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'top, transform'
                                            }}
                                        ></div>
                                        <div
                                            className={`absolute top-[9px] h-[3px] w-8 bg-primary rounded transition-all duration-300 ${isMenuOpen ? 'scale-x-0 !top-[10px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'top, transform'
                                            }}
                                        ></div>
                                        <div
                                            className={`absolute bottom-0 h-[3px] w-8 bg-primary rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 bottom-[8px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'bottom, transform'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="overflow-hidden pt-24
             lg:pt-28 2xl:pt-30">
                {children}
            </main>

            <footer className="relative bg-[#31231C]">
                <div className="container max-w-large">
                    <div className="pb-10">
                        <img src={`/cashback/site/img/logo.png`} className="w-2/6 sm:w-40 xl:w-36 2xl:w-44 mx-auto -mb-20 -translate-y-1/2" />

                        <nav className="relative border-b border-white border-opacity-30 pb-5">
                            <ul className="flex max-lg:flex-wrap justify-evenly gap-y-4 gap-x-4 md:gap-x-14 lg:gap-10 mt-14 max-w-7xl mx-auto">
                                <li>
                                    <CustomLink href={route('Home.index')} to="#como-funciona" className="text-white text-sm font-medium leading-none transition-all opacity-70 hover:opacity-100">Como Funciona</CustomLink>
                                </li>

                                <li>
                                    <CustomLink href={route('Home.index')} to="#sobre-cashback" className="text-white text-sm font-medium leading-none transition-all opacity-70 hover:opacity-100">Sobre o Cashback</CustomLink>
                                </li>

                                <li>
                                    <CustomLink href={route('Home.index')} to="#perks" className="text-white text-sm font-medium leading-none transition-all opacity-70 hover:opacity-100">Inspiração</CustomLink>
                                </li>

                                <li>
                                    <CustomLink href={route('Home.index')} to="#inspiration" className="text-white text-sm font-medium leading-none transition-all opacity-70 hover:opacity-100">Lojas Participantes</CustomLink>
                                </li>

                                <li>
                                    <CustomLink href={route('Regulamento.index')} to="" className="text-white text-sm font-medium leading-none transition-all opacity-70 hover:opacity-100">Regulamento</CustomLink>
                                </li>

                                <li>
                                    <a href="https://casabrasileiraplanejados.com.br/solicite-seu-projeto" target="_blank" className="text-white text-sm font-medium leading-none transition-all opacity-70 hover:opacity-100">Solicite Seu Projeto</a>
                                </li>
                            </ul>
                        </nav>

                        {/*<p className="text-[10px] sm:text-xs text-white text-center opacity-70 mx-auto mt-12 max-w-7xl">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>

                        <p className="text-sm text-white text-center font-bold opacity-70 pt-4">Promoção valida até: xx/xx/xxxx</p> */}

                        <ul className="flex justify-center gap-3 mt-8">
                            <li><a href="https://www.facebook.com/casabrasileiraoficial" className="block text-[0]" target="_blank">facebook<img src={`/cashback/site/img/facebook-icon.png`} /></a></li>
                            <li><a href="https://www.instagram.com/casabrasileiraoficial" className="block text-[0]" target="_blank">instagram<img src={`/cashback/site/img/instagram-icon.png`} /></a></li>
                        </ul>   
                    </div>
                </div>

                <div className="bg-black bg-opacity-30 py-6 2xl:py-8">
                    <div className="container max-w-large">
                        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between">
                            <Link href={route('Politicas.privacidade')} className="block text-white max-md:text-center max-md:mb-4 text-xs text-opacity-65 transition-all hover:text-opacity-100">Política de Privacidade</Link>
                                <span className="text-white text-xs text-center opacity-70 mb-5 md:mb-0">
                                    © {new Date().getFullYear()} Casa Brasileira | Todos os direitos reservados.
                                </span>

                            <div className="flex items-center ml-auto max-md:mr-auto gap-4">
                                <span className="text-white text-xs opacity-70">Desenvolvido por: </span>
                                <img src={`/cashback/site/img/8poroito-logo.png`} className="opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {!notifyCookie && (
                <CookieModal acceptCookies={acceptCookies} visible={!notifyCookie} />
            )}
        </>
    );
};

export default DefaultLayout;