import { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import drawDetail from '../site/img/draw-detail.png';

const DrawPath = ({ className }) => {
    const pathRef = useRef();

    useEffect(() => {
        const path = pathRef.current;

        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: path,
                start: "top 80%",
            },
            ease: "linear",
            delay: 0.6,
        });

    }, []);

    return (
        <div className={`${className} absolute scale-125`}>
            <svg viewBox="0 0 710.719 139.086">
                <defs>
                    <mask id="draw-mask">
                    <path ref={pathRef} fill="none" stroke="white" strokeWidth="30" d="M710.7,65.2c0,0-158.6-58.4-398.1-49s-301,38.6-301,56.3 s103.3,62.6,330.3,61s339.1-28.2,339.1-47S565.6,3.6,304.2,6.2s-263.5,13-263.5,13" />
                    </mask>
                </defs>

                <image href={drawDetail} width="710.719" height="139.086" mask="url(#draw-mask)" />
            </svg>
        </div>
    );
};

export default DrawPath;