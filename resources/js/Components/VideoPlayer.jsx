import React, { useEffect, useRef, useState } from 'react';

import playBtn from '../site/img/play-btn.png';
import pauseBtn from '../site/img/pause-btn.png';

export const VideoPlayer = ({ src, poster = null, classList = [], autoplay = false }) => {
    const videoRef = useRef(null);
    const className = classList.join(' ');
    const [videoError, setVideoError] = useState(false);
    const [isPlaying, setIsPlaying] = useState(autoplay);
    const [isEnded, setIsEnded] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleUserInteraction = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
        }
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            const handlePlay = () => {
                setIsPlaying(true);
                setIsEnded(false);
            };

            const handlePause = () => setIsPlaying(false);
            const handleEnded = () => {
                setIsPlaying(false);
                setIsEnded(true);
            };

            videoElement.addEventListener('play', handlePlay);
            videoElement.addEventListener('pause', handlePause);
            videoElement.addEventListener('ended', handleEnded);

            return () => {
                videoElement.removeEventListener('play', handlePlay);
                videoElement.removeEventListener('pause', handlePause);
                videoElement.removeEventListener('ended', handleEnded);
            };
        }
    }, []);

    useEffect(() => {
        if (autoplay) {
            document.addEventListener('click', handleUserInteraction);
            document.addEventListener('touchstart', handleUserInteraction);
        }

        return () => {
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
        };
    }, [autoplay]);

    return (
        <div className="relative z-[1] w-full aspect-[64/89] md:max-w-[1280px] max-h-screen mx-auto">
            <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full left-1/2 -translate-x-1/2 ${className}`}
                loop
                controls
                playsInline
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
                autoPlay={autoplay}
                muted={autoplay}
                poster={poster}
            >
                <source src={src} type="video/mp4" />
            </video>
            {videoError && <p>Failed to load video. Please try again later.</p>}

            <div className={`absolute inset-0 bg-black pointer-events-none ${(!isPlaying || isEnded) ? 'opacity-50' : 'opacity-0'}`}>
                <p className="absolute left-20 right-20 bottom-[30%] text-white text-lg text-center font-light leading-tight">Assista ao vídeo<br />da campanha</p>
            </div>

            <button
                className={`absolute inset-0 m-auto xl:w-40 h-30 w-30 max-w-[20vw] xl:h-40 2xl:w-fit 2xl:h-fit transition-all z-[1] ${isPlaying ? ' opacity-0 hover:opacity-50' : ' opacity-50 hover:opacity-100'}`}
                onClick={togglePlay}
            >
                <img
                    src={isPlaying ? pauseBtn : playBtn}
                    className="block"
                    alt={isPlaying ? 'Pause' : 'Play'}
                />
            </button>
        </div>
    );
};