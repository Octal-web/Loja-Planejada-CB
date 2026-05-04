import { useEffect, useRef } from "react";
import gsap from "gsap";

const StarsColumn = ({ className }) => {
    const starsRef = useRef([]);

    useEffect(() => {
        gsap.from(starsRef.current, {
            opacity: 0,
            y: 20,
            scale: 0.8,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
        });
    }, []);

    return (
        <div className={`${className} absolute flex flex-col items-center space-y-2`}>
            {[...Array(6)].map((_, i) => (
                <svg
                    key={i}
                    ref={(el) => (starsRef.current[i] = el)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 25.664 26.418"
                >
                    <path
                        d="M10.9,0,8.326,7.918H0l6.735,4.893L4.163,20.729,10.9,15.836l6.735,4.893L15.06,12.811,21.8,7.918H13.471Z"
                        transform="matrix(0.259, 0.966, -0.966, 0.259, 20.023, 0)"
                        className="fill-secondary"
                    />
                </svg>
            ))}
        </div>
    );
};

export default StarsColumn;