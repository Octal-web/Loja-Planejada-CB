import { useRef, useEffect, useId } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShortArrowPath = ({ className, fillClass = "fill-secondary", delay = 1 }) => {
    const pathRef = useRef();
    const containerRef = useRef(null);
    
    const id = useId();
    const maskId = `short-arrow-mask-${id}`;

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
            <svg viewBox="0 0 445.3 82.1">
                <defs>
                    <mask id={maskId}>
                        <path ref={pathRef} d="M0.1 40.9 L425.2 40.9 L371.5 13.5 L379.1 3 L437.2 41.1 L379.7 82" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    </mask>
                </defs>

                <path d="M381,0l-3.7,6.1c14.2,9.4,30,19.5,43.5,30.6l-412,0.2c-5.8,0-7.8,2.9-8.6,4.1c-0.8,1.2,4.3,5.8,6.3,5.8 l414.7,0.1c-12.6,14.2-39.9,22.1-44,33.8c-0.4,1.3,5.3,1.9,6.7,1l61.5-39.9L381,0z" className={fillClass} mask={`url(#${maskId})`} />
            </svg>
        </div>
    );
};

export default ShortArrowPath;