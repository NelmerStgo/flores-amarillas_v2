import { motion } from "motion/react";

import Scene from "../components/Scene";

interface IntroSceneProps {
    onContinue: () => void;
}

function IntroScene({
    onContinue,
}: IntroSceneProps) {
    return (
        <Scene
            theme="neutral"
            className="intro-scene"
        >
            {/* Fondo artístico */}
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
                        ease: [0.22, 1, 0.36, 1],
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

                <motion.div
                    className="intro-plant intro-plant--left"
                    initial={{
                        opacity: 0,
                        rotate: -8,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        rotate: [-4, 1, -4],
                        y: 0,
                    }}
                    transition={{
                        opacity: {
                            duration: 1.5,
                            delay: 0.6,
                        },

                        y: {
                            duration: 1.5,
                            delay: 0.6,
                        },

                        rotate: {
                            delay: 2,
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <span className="intro-plant-stem" />
                    <span className="intro-plant-leaf intro-plant-leaf--one" />
                    <span className="intro-plant-leaf intro-plant-leaf--two" />
                </motion.div>

                <motion.div
                    className="intro-plant intro-plant--right"
                    initial={{
                        opacity: 0,
                        rotate: 7,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        rotate: [4, -1, 4],
                        y: 0,
                    }}
                    transition={{
                        opacity: {
                            duration: 1.5,
                            delay: 0.75,
                        },

                        y: {
                            duration: 1.5,
                            delay: 0.75,
                        },

                        rotate: {
                            delay: 2,
                            duration: 5.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <span className="intro-plant-stem" />
                    <span className="intro-plant-leaf intro-plant-leaf--one" />
                    <span className="intro-plant-leaf intro-plant-leaf--two" />
                </motion.div>
            </div>

            {/* Contenido */}
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
                    PARA LISS
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
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Encontré algo
                    <br />
                    que quería mostrarte.
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
                    No tienes que hacer mucho.
                    <br />
                    Solo dejarte llevar un poquito.
                </motion.p>

                <motion.button
                    className="intro-enter"
                    onClick={onContinue}
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
                    whileHover={{
                        y: -2,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                >
                    <span>Comenzar</span>

                    <motion.span
                        className="intro-enter-symbol"
                        animate={{
                            x: [0, 4, 0],
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

            <motion.span
                className="intro-small-note"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.42,
                }}
                transition={{
                    delay: 3,
                    duration: 1,
                }}
            >
                todo empieza con algo pequeño
            </motion.span>
        </Scene>
    );
}

export default IntroScene;