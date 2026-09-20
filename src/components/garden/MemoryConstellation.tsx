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
            {/* Puntos */}

            <motion.span
                className="constellation-point constellation-point--one"
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 0.2,
                    type: "spring",
                }}
            >
                ✦
            </motion.span>

            <motion.span
                className="constellation-point constellation-point--two"
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 0.45,
                    type: "spring",
                }}
            >
                ✦
            </motion.span>

            <motion.span
                className="constellation-point constellation-point--three"
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 0.7,
                    type: "spring",
                }}
            >
                ✦
            </motion.span>

            {/* Líneas */}

            <motion.span
                className="constellation-line constellation-line--one"
                initial={{
                    scaleX: 0,
                    opacity: 0,
                }}
                animate={{
                    scaleX: 1,
                    opacity: 0.35,
                }}
                transition={{
                    delay: 1,
                    duration: 1.2,
                }}
            />

            <motion.span
                className="constellation-line constellation-line--two"
                initial={{
                    scaleX: 0,
                    opacity: 0,
                }}
                animate={{
                    scaleX: 1,
                    opacity: 0.35,
                }}
                transition={{
                    delay: 1.35,
                    duration: 1.2,
                }}
            />

            <motion.span
                className="constellation-line constellation-line--three"
                initial={{
                    scaleX: 0,
                    opacity: 0,
                }}
                animate={{
                    scaleX: 1,
                    opacity: 0.35,
                }}
                transition={{
                    delay: 1.7,
                    duration: 1.2,
                }}
            />

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
                    Al final, no eran
                    momentos aislados.
                </p>

                <motion.strong
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 0.82,
                    }}
                    transition={{
                        delay: 0.7,
                    }}
                >
                    Uno llevó a otro...
                    <br />
                    y sin darme cuenta,
                    ya había una historia.
                </motion.strong>
            </motion.div>
        </motion.div>
    );
}

export default MemoryConstellation;