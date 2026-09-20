import { motion } from "motion/react";

interface RootsDiscoveryProps {
    showCopy: boolean;
    careLevel: number;
}

function RootsDiscovery({ showCopy, careLevel }: RootsDiscoveryProps) {
    return (
        <motion.div
            className={`roots-discovery roots-discovery--care-${careLevel}`}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.4,
            }}
        >
            {/* Luz bajo el suelo */}
            <motion.div
                className="roots-soil-glow"
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />

            {/* Sistema de raíces */}
            <div
                className="roots-system"
                aria-hidden="true"
            >
                <motion.span
                    className="root-segment root-segment--main"
                    initial={{
                        scaleX: 0,
                        opacity: 0,
                        rotate: 62,
                    }}
                    animate={{
                        scaleX: 1,
                        opacity: 0.75,
                        rotate: 62,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 1.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                <motion.span
                    className="root-segment root-segment--branch-a"
                    initial={{
                        scaleX: 0,
                        opacity: 0,
                        rotate: 150,
                    }}
                    animate={{
                        scaleX: 1,
                        opacity: 0.6,
                        rotate: 150,
                    }}
                    transition={{
                        delay: 1.15,
                        duration: 1.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                <motion.span
                    className="root-segment root-segment--branch-b"
                    initial={{
                        scaleX: 0,
                        opacity: 0,
                        rotate: 24,
                    }}
                    animate={{
                        scaleX: 1,
                        opacity: 0.55,
                        rotate: 24,
                    }}
                    transition={{
                        delay: 1.45,
                        duration: 1.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                <motion.span
                    className="root-segment root-segment--branch-c"
                    initial={{
                        scaleX: 0,
                        opacity: 0,
                        rotate: 138,
                    }}
                    animate={{
                        scaleX: 1,
                        opacity: 0.5,
                        rotate: 138,
                    }}
                    transition={{
                        delay: 1.8,
                        duration: 1.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                <motion.span
                    className="root-segment root-segment--branch-d"
                    initial={{
                        scaleX: 0,
                        opacity: 0,
                        rotate: 35,
                    }}
                    animate={{
                        scaleX: 1,
                        opacity: 0.45,
                        rotate: 35,
                    }}
                    transition={{
                        delay: 2.05,
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />
            </div>

            {/* Contenido narrativo */}
            <motion.div
                className="roots-copy"
                animate={{
                    opacity: showCopy ? 1 : 0,
                    y: showCopy ? 0 : -10,
                }}
                transition={{
                    duration: 0.8,
                }}
            >
                <motion.span
                    className="roots-number"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 0.35,
                    }}
                    transition={{
                        delay: 1.2,
                        duration: 1,
                    }}
                >
                    02 / ?
                </motion.span>

                <motion.h3
                    initial={{
                        opacity: 0,
                        y: 14,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 1.6,
                        duration: 0.9,
                    }}
                >
                    Cómo empezó todo.
                </motion.h3>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 0.62,
                        y: 0,
                    }}
                    transition={{
                        delay: 2.3,
                        duration: 0.9,
                    }}
                >
                    Todo empezó con algo pequeño.
                </motion.p>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 0.62,
                        y: 0,
                    }}
                    transition={{
                        delay: 3,
                        duration: 0.9,
                    }}
                >
                    Una conversación.
                    <br />
                    Luego otra.
                </motion.p>

                <motion.p
                    className="roots-final-line"
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 0.78,
                        y: 0,
                    }}
                    transition={{
                        delay: 3.8,
                        duration: 1,
                    }}
                >
                    Y, sin notarlo,
                    <br />
                    empezó a echar raíces.
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default RootsDiscovery;