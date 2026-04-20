import { useRef, useEffect, useId } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MarkPath = ({ className, fillClass = "fill-secondary", delay = 1 }) => {
    const pathRef = useRef();
    const containerRef = useRef(null);
    
    const id = useId();
    const maskId = `mark-mask-${id}`;

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
            <svg viewBox="0 0 81.1 80.3">
                <defs>
                    <mask id={maskId}>
                        <polyline ref={pathRef} points="0,80.3 77.6,3.3 77.6,75 0,0" fill="none" stroke="white" strokeWidth="12" />
                    </mask>
                </defs>

                <path d="M72.5,78.4L41.1,47.2L9.4,77.9c-1,1-5.9,3.1-6.4,2.2L0,74l33.5-34.4L2.5,8.3 C1.3,7,0.6,3.3,0.7,1.9c0-1.9,6.9-2.1,8.6-0.4l31.4,30.9L71.8,2 c1.2-1.2,6.1-2.1,7.6-2c1.5,0.2,2,5.7,0.9,6.9L48.2,39.9l30.2,31 c1.5,1.5,2.4,5.6,2.7,7.3C81.3,79.9,73.8,79.7,72.5,78.4" className={fillClass} mask={`url(#${maskId})`} />
            </svg>
        </div>
    );
};

export default MarkPath;