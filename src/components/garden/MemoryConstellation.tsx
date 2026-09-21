import { motion } from "motion/react";

interface MemoryConstellationProps {
    onOpen: () => void;
}

function MemoryConstellation({
    onOpen,
}: MemoryConstellationProps) {
    return (
        <motion.div
            className="memory-constellation"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
        >
            {/* Los recuerdos permanecen en el jardín */}

            <motion.span
                className="constellation-point constellation-point--one"
                initial={{
                    opacity: 0,
                    scale: 0.6,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 0.15,
                    duration: 0.7,
                }}
            >
                ✦
            </motion.span>

            <motion.span
                className="constellation-point constellation-point--two"
                initial={{
                    opacity: 0,
                    scale: 0.6,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 0.3,
                    duration: 0.7,
                }}
            >
                ✦
            </motion.span>

            <motion.span
                className="constellation-point constellation-point--three"
                initial={{
                    opacity: 0,
                    scale: 0.6,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 0.45,
                    duration: 0.7,
                }}
            >
                ✦
            </motion.span>

            {/* Los tres recuerdos empiezan a conectarse */}

            <svg
                className="memory-constellation-map"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <motion.path
                    d="M 12 26 Q 30 31 50 40"
                    initial={{
                        pathLength: 0,
                        opacity: 0,
                    }}
                    animate={{
                        pathLength: 1,
                        opacity: 0.55,
                    }}
                    transition={{
                        delay: 0.75,
                        duration: 1.25,
                        ease: "easeInOut",
                    }}
                />

                <motion.path
                    d="M 88 44 Q 68 38 50 40"
                    initial={{
                        pathLength: 0,
                        opacity: 0,
                    }}
                    animate={{
                        pathLength: 1,
                        opacity: 0.55,
                    }}
                    transition={{
                        delay: 1.05,
                        duration: 1.25,
                        ease: "easeInOut",
                    }}
                />

                <motion.path
                    d="M 50 79 Q 47 60 50 40"
                    initial={{
                        pathLength: 0,
                        opacity: 0,
                    }}
                    animate={{
                        pathLength: 1,
                        opacity: 0.55,
                    }}
                    transition={{
                        delay: 1.35,
                        duration: 1.25,
                        ease: "easeInOut",
                    }}
                />

                <motion.path
                    d="M 12 26 Q 49 15 88 44"
                    initial={{
                        pathLength: 0,
                        opacity: 0,
                    }}
                    animate={{
                        pathLength: 1,
                        opacity: 0.22,
                    }}
                    transition={{
                        delay: 1.7,
                        duration: 1.4,
                        ease: "easeInOut",
                    }}
                />
            </svg>

            {/* Centro */}

            <motion.button
                className="constellation-center constellation-center--button"
                onClick={onOpen}
                aria-label="Descubrir qué formaron estos recuerdos"
                initial={{
                    opacity: 0,
                    scale: 0.3,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 2.4,
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
                whileTap={{
                    scale: 0.88,
                }}
            >
                <motion.span
                    className="constellation-center-glow"
                    animate={{
                        opacity: [0.15, 0.4, 0.15],
                        scale: [1, 1.25, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <span className="constellation-center-core">
                    ✦
                </span>
            </motion.button>

            {/* Texto */}

            <motion.div
                className="constellation-copy"
                initial={{
                    opacity: 0,
                    y: 12,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 3.1,
                    duration: 1,
                }}
            >
                <p>
                    A pesar de la distancia,
                </p>

                <motion.strong
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 0.9,
                    }}
                    transition={{
                        delay: 0.7,
                    }}
                >
                    siempre encontrábamos la forma
                    <br />
                    de estar presentes.
                    <br />
                    Y sin darnos cuenta,
                    <br />
                    nuestra historia ya se estaba escribiendo :)
                </motion.strong>
            </motion.div>
        </motion.div>
    );
}

export default MemoryConstellation;