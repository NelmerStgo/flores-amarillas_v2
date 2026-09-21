import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    AnimatePresence,
    motion,
} from "motion/react";

import dieTrying from "../assets/audio/die-trying.mp3";

function BackgroundMusic() {
    const audioRef =
        useRef<HTMLAudioElement | null>(
            null,
        );

    const fadeRef =
        useRef<number | null>(
            null,
        );

    const [available, setAvailable] =
        useState(false);

    const [started, setStarted] =
        useState(false);

    const [playing, setPlaying] =
        useState(false);

    useEffect(() => {
        const audio =
            audioRef.current;

        if (!audio) {
            return;
        }

        audio.volume = 0;

        const fadeIn = () => {
            if (fadeRef.current) {
                window.clearInterval(
                    fadeRef.current,
                );
            }

            const targetVolume = 0.28;
            const increment = 0.02;

            fadeRef.current =
                window.setInterval(
                    () => {
                        if (
                            audio.volume >=
                            targetVolume
                        ) {
                            audio.volume =
                                targetVolume;

                            if (
                                fadeRef.current
                            ) {
                                window.clearInterval(
                                    fadeRef.current,
                                );
                            }

                            return;
                        }

                        audio.volume =
                            Math.min(
                                targetVolume,
                                audio.volume +
                                increment,
                            );
                    },
                    120,
                );
        };

        const startMusic = async () => {
            try {
                await audio.play();

                setStarted(true);
                setPlaying(true);

                fadeIn();
            } catch (error) {
                console.warn(
                    "No se pudo iniciar el audio:",
                    error,
                );
            }
        };

        window.addEventListener(
            "flowers:start-music",
            startMusic,
        );

        return () => {
            window.removeEventListener(
                "flowers:start-music",
                startMusic,
            );

            if (fadeRef.current) {
                window.clearInterval(
                    fadeRef.current,
                );
            }
        };
    }, []);

    const toggleMusic = async () => {
        const audio =
            audioRef.current;

        if (!audio) {
            return;
        }

        if (audio.paused) {
            try {
                await audio.play();

                setStarted(true);
                setPlaying(true);

                audio.volume = 0.28;
            } catch (error) {
                console.warn(
                    "No se pudo reproducir el audio:",
                    error,
                );
            }
        } else {
            audio.pause();

            setPlaying(false);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={dieTrying}
                loop
                preload="auto"
                controls={false}
                onCanPlay={() =>
                    setAvailable(true)
                }
                onLoadedData={() =>
                    setAvailable(true)
                }
                onPlay={() =>
                    setPlaying(true)
                }
                onPause={() =>
                    setPlaying(false)
                }
                onError={() => {
                    setAvailable(false);

                    console.warn(
                        "No se pudo cargar die-trying.mp3",
                    );
                }}
            />

            <AnimatePresence>
                {available &&
                    started && (
                        <motion.button
                            type="button"
                            className="music-toggle"
                            onClick={
                                toggleMusic
                            }
                            aria-label={
                                playing
                                    ? "Pausar música"
                                    : "Reproducir música"
                            }
                            aria-pressed={
                                playing
                            }
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <motion.span
                                animate={
                                    playing
                                        ? {
                                            rotate: [
                                                -4,
                                                4,
                                                -4,
                                            ],

                                            scale: [
                                                1,
                                                1.08,
                                                1,
                                            ],
                                        }
                                        : undefined
                                }
                                transition={{
                                    duration: 2.5,
                                    repeat:
                                        Infinity,
                                    ease:
                                        "easeInOut",
                                }}
                            >
                                {playing
                                    ? "♫"
                                    : "♪"}
                            </motion.span>
                        </motion.button>
                    )}
            </AnimatePresence>
        </>
    );
}

export default BackgroundMusic;