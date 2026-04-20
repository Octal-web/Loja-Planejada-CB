import { useRef, useEffect, useId } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CirclePath = ({ className, fillClass = "fill-secondary", delay = 1 }) => {
    const pathRef = useRef();
    const containerRef = useRef(null);

    const id = useId();
    const maskId = `circle-mask-${id}`;

    useEffect(() => {
        const path = pathRef.current;

        if (!path) return;

        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 0.4,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            ease: "linear",
            delay: delay  * 0.6,
        });

    }, []);

    return (
        <div ref={containerRef} className={`${className} absolute`}>
            <svg viewBox="0 0 81.2 81.3">
                <defs>
                    <mask id={maskId}>
                        <path ref={pathRef} d="M40.6,4.4c-20,0-36.3,16.2-36.3,36.3s16.2,36.3,36.3,36.3s36.3-16.2,36.3-36.3S60.6,4.4,40.6,4.4" fill="none" stroke="white" strokeWidth="10" />
                    </mask>
                </defs>

                <path d="M26.9,2.4c22.4-7.9,45,4.4,51.9,24.1c7.6,21.8-2.9,45.4-25.3,52.7 c-19.9,6.5-42.6-2.6-50.8-23.7C-4.8,35.9,3.4,10.7,26.9,2.4 M34.7,10.4C15.7,14.3,6.5,32.8,10.6,48c4.3,16.2,20.1,26.1,35.5,23 c17-3.3,28。2-19。7,24。8-36。4C67。8,19。3,52。8,6。7,34。7,10。4" className={fillClass} mask={`url(#${maskId})`} />
            </svg>
        </div>
    );
};

export default CirclePath;