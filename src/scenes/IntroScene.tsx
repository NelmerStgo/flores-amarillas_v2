import { useState } from "react";
import {
    AnimatePresence,
    motion,
} from "motion/react";

import Scene from "../components/Scene";

import holaGato from "../assets/memories/hola-gato.jpg";

interface IntroSceneProps {
    onContinue: () => void;
}

function IntroScene({
    onContinue,
}: IntroSceneProps) {
    const [welcomeOpen, setWelcomeOpen] =
        useState(true);

    return (
        <Scene
            theme="neutral"
            className="intro-scene"
        >
            <AnimatePresence>
                {welcomeOpen && (
                    <motion.div
                        className="intro-welcome-overlay"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                    >
                        <motion.div
                            className="intro-welcome-card"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Saludo para LISS"
                            initial={{
                                opacity: 0,
                                scale: 0.88,
                                y: 22,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.94,
                                y: 12,
                            }}
                            transition={{
                                duration: 0.55,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                        >
                            <img
                                src={holaGato}
                                alt=""
                                className="intro-welcome-image"
                            />

                            <motion.button
                                type="button"
                                className="intro-welcome-close"
                                onClick={() =>
                                    setWelcomeOpen(false)
                                }
                                aria-label="Cerrar saludo"
                                animate={{
                                    scale: [
                                        1,
                                        1.06,
                                        1,
                                    ],
                                }}
                                transition={{
                                    duration: 1.7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                whileTap={{
                                    scale: 0.94,
                                }}
                            >
                                Quítese 🤨
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className="intro-landscape"
                aria-hidden="true"
            >
                <motion.div
                    className="intro-sun"
                    initial={{
                        opacity: 0,
                        scale: 0.7,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 2.5,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
                    }}
                />

                <motion.div
                    className="intro-hill intro-hill--back"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.8,
                    }}
                />

                <motion.div
                    className="intro-hill intro-hill--front"
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.15,
                    }}
                />
            </div>

            <div className="intro-content">
                <motion.span
                    className="intro-eyebrow"
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 0.65,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                    }}
                >
                    PARA LISS ✨
                </motion.span>

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.85,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
                    }}
                >
                    Hice un mini-proyectito
                    <br />
                    para ti :3
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 1.5,
                    }}
                >
                    Solo déjate llevar
                    <br />
                    y sigue tus instintos.
                </motion.p>

                <motion.button
                    className="intro-enter"
                    onClick={() => {
                        window.dispatchEvent(
                            new Event(
                                "flowers:start-music",
                            ),
                        );

                        onContinue();
                    }}
                    aria-label="Comenzar"
                    initial={{
                        opacity: 0,
                        y: 14,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 2.15,
                    }}
                    whileTap={{
                        scale: 0.94,
                    }}
                >
                    <motion.span
                        className="intro-enter-symbol"
                        animate={{
                            x: [
                                0,
                                4,
                                0,
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        →
                    </motion.span>
                </motion.button>
            </div>
        </Scene>
    );
}

export default IntroScene;