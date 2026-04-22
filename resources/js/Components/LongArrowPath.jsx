import { useRef, useEffect, useId } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LongArrowPath = ({ className, fillClass = "fill-secondary", delay = 1 }) => {
    const pathRef = useRef();
    const containerRef = useRef(null);

    const id = useId();
    const maskId = `long-arrow-mask-${id}`;

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
            duration: 0.5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            ease: "linear",
            delay: delay * 0.6,
        });

    }, []);

    return (
        <div ref={containerRef} className={`${className} absolute`}>
            <svg viewBox="0 0 685.6 82.2">
                <defs>
                    <mask id={maskId}>
                        <path ref={pathRef} d="M0,51.1c183-17.5,668.6-9.4,668.6-9.4l-53.7-27.4l4.2-13.5l59.6,42.4l-62.3,38.5" fill="none" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                    </mask>
                </defs>

                <path d="M618.7-0.4c7.3,21.7,30.9,21.3,43.3,38.2C441.4,31.4,224.4,33.7,5.9,46c-1.7,0.1-4.9,3.1-5.7,4.5 c-0.8,1.4,1.8,5.4,6,5.2c217.2-11.9,439.8-14.7,657-7.8c1.9,2.2-63.3,35.2-44.8,33.8 c8.4-0.6,56.7-30.1,66.3-38.7l0,0C659.9,24.7,642.3,11.8,618.7-0.4z" className={fillClass} mask={`url(#${maskId})`} />
            </svg>
        </div>
    );
};

export default LongArrowPath;