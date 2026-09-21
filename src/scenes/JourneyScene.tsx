import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Scene from "../components/Scene";
import yellowFlower from "../assets/decor/yellow-flower.png";

interface JourneySceneProps {
    onBack: () => void;
    onContinue: () => void;
}

function DiscoveryStar() {
    return (
        <svg
            className="journey-discovery-star"
            viewBox="0 0 64 64"
            aria-hidden="true"
        >
            <defs>
                <radialGradient
                    id="journeyStarGradient"
                    cx="50%"
                    cy="45%"
                    r="55%"
                >
                    <stop
                        offset="0%"
                        stopColor="#fffce8"
                    />

                    <stop
                        offset="45%"
                        stopColor="#f8dc73"
                    />

                    <stop
                        offset="100%"
                        stopColor="#d6a82d"
                    />
                </radialGradient>
            </defs>

            <path
                d="
                    M32 3
                    C34.4 18.2 45.8 29.6 61 32
                    C45.8 34.4 34.4 45.8 32 61
                    C29.6 45.8 18.2 34.4 3 32
                    C18.2 29.6 29.6 18.2 32 3
                    Z
                "
                fill="url(#journeyStarGradient)"
            />

            <circle
                cx="32"
                cy="32"
                r="5"
                fill="#fff7c5"
            />
        </svg>
    );
}

function JourneyScene({
    onBack,
    onContinue,
}: JourneySceneProps) {
    const [discovered, setDiscovered] = useState(false);

    return (
        <Scene
            theme="night"
            className="journey-scene"
        >
            <div
                className="journey-sky"
                aria-hidden="true"
            >
                <motion.div
                    className="journey-moon-glow"
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
                    }}
                />

                {[
                    "journey-star--1",
                    "journey-star--2",
                    "journey-star--3",
                    "journey-star--4",
                    "journey-star--5",
                    "journey-star--6",
                ].map((className, index) => (
                    <motion.span
                        key={className}
                        className={`journey-star ${className}`}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [
                                0.25,
                                0.8,
                                0.35,
                                0.75,
                            ],
                            scale: [
                                0.8,
                                1.1,
                                0.9,
                                1,
                            ],
                        }}
                        transition={{
                            opacity: {
                                delay:
                                    0.5 + index * 0.17,
                                duration:
                                    3 + index * 0.35,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },

                            scale: {
                                delay:
                                    0.5 + index * 0.17,
                                duration:
                                    3.5 + index * 0.25,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    />
                ))}

                <motion.div
                    className="journey-horizon"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 2,
                    }}
                />

                <motion.div
                    className="journey-grass journey-grass--left"
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 0.38,
                        y: 0,
                        rotate: [-2, 2, -2],
                    }}
                    transition={{
                        opacity: {
                            duration: 1.5,
                            delay: 0.5,
                        },

                        y: {
                            duration: 1.5,
                            delay: 0.5,
                        },

                        rotate: {
                            delay: 2,
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <span className="journey-grass-stem" />
                    <span className="journey-grass-leaf journey-grass-leaf--one" />
                    <span className="journey-grass-leaf journey-grass-leaf--two" />
                </motion.div>

                <motion.div
                    className="journey-grass journey-grass--right"
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 0.38,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.7,
                    }}
                >
                    <span className="journey-grass-stem" />
                    <span className="journey-grass-leaf journey-grass-leaf--one" />
                    <span className="journey-grass-leaf journey-grass-leaf--two" />
                </motion.div>
            </div>

            <div className="ambient-light ambient-light--journey" />

            <button
                className="scene-back-button"
                onClick={onBack}
                aria-label="Volver"
            >
                ←
            </button>

            <div className="journey-content">
                <AnimatePresence mode="wait">
                    {!discovered ? (
                        <motion.div
                            key="search"
                            className="journey-step"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                y: -10,
                            }}
                        >

                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                }}
                            >
                                ¿Te acuerdas de nuestras
                                <br />
                                salidas nocturnas?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.65 }}
                                transition={{
                                    delay: 1.1,
                                    duration: 0.8,
                                }}
                            >
                                Siempre nos permitió
                                escapar de la realidad un rato,
                                y darnos el lujo de ser quienes somos realmente.
                            </motion.p>

                            <motion.button
                                className="discovery-point"
                                aria-label="Descubrir"
                                onClick={() =>
                                    setDiscovered(true)
                                }
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    opacity: {
                                        delay: 1.8,
                                        duration: 0.8,
                                    },
                                    scale: {
                                        delay: 1.8,
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 15,
                                    },
                                }}
                                whileTap={{
                                    scale: 0.88,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                }}
                            >
                                <motion.span
                                    className="discovery-glow"
                                    animate={{
                                        opacity: [
                                            0.25,
                                            0.65,
                                            0.25,
                                        ],
                                        scale: [
                                            0.85,
                                            1.45,
                                            0.85,
                                        ],
                                    }}
                                    transition={{
                                        duration: 2.1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                <motion.span
                                    className="discovery-ring"
                                    animate={{
                                        opacity: [
                                            0,
                                            0.35,
                                            0,
                                        ],
                                        scale: [
                                            0.55,
                                            1.45,
                                            1.8,
                                        ],
                                    }}
                                    transition={{
                                        duration: 2.1,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                    }}
                                />

                                <motion.span
                                    className="discovery-core discovery-core--star"
                                    animate={{
                                        scale: [
                                            1,
                                            1.18,
                                            1,
                                        ],
                                    }}
                                    transition={{
                                        duration: 2.1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <DiscoveryStar />
                                </motion.span>
                            </motion.button>

                            <motion.span
                                className="discovery-hint"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{
                                    delay: 2.5,
                                }}
                            >
                                {/*fgds*/}
                            </motion.span>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="discovered"
                            className="journey-step"
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <motion.div
                                className="discovered-flower"
                                initial={{
                                    scale: 0,
                                    rotate: -25,
                                }}
                                animate={{
                                    scale: 1,
                                    rotate: 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 12,
                                }}
                            >
                                <DiscoveryStar />
                            </motion.div>

                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                }}
                            >
                                La curiosidad siempre ha sido lo nuestro.
                                <br />
                                Nos permite
                                experimentar y ver que siempre hay cosas por
                                descubrir
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.65 }}
                                transition={{
                                    delay: 0.9,
                                }}
                            >
                                Y sabemos que a partir de ahí,
                                nuestras aventuras empezaron a ser más emocionantes ;p
                            </motion.p>

                            {/*Esta flor se puede remplazar por una mejor */}
                            <motion.button
                                className="flower-button"
                                onClick={onContinue}
                                aria-label="Continuar"
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    delay: 1.4,
                                    type: "spring",
                                }}
                                whileTap={{
                                    scale: 0.9,
                                    rotate: -4,
                                }}
                            >
                                <img
                                    src={yellowFlower}
                                    className="journey-flower-image"
                                    alt=""
                                />
                            </motion.button>


                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Scene>
    );
}

export default JourneyScene;