import { AnimatePresence, motion } from "motion/react";

interface RelationshipGrowthProps {
    visible: boolean;
    introDone: boolean;

    careLevel: number;
    complete: boolean;

    showFinalCopy: boolean;

    onWater: () => void;
}

function RelationshipGrowth({
    visible,
    introDone,
    careLevel,
    complete,
    showFinalCopy,
    onWater,
}: RelationshipGrowthProps) {
    if (!visible) return null;

    return (
        <motion.div
            className="relationship-growth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="relationship-growth-content">
                {/* Texto inicial */}
                <AnimatePresence>
                    {careLevel === 0 && (
                        <motion.div
                            className="relationship-copy"
                            initial={{
                                opacity: 0,
                                y: 12,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <span>
                                Todo empezó pequeño.
                            </span>

                            <h3>
                                Una conversación.
                                <br />
                                Luego otra.
                            </h3>

                            <p>
                                Y sin darnos cuenta,
                                algo empezó a echar raíces.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Raíces */}
                <div
                    className="relationship-roots"
                    aria-hidden="true"
                >
                    <svg
                        viewBox="0 0 400 230"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <motion.path
                            d="M200 10 C198 60 190 82 168 112 C150 137 133 157 118 206"
                            initial={{
                                pathLength: 0,
                                opacity: 0,
                            }}
                            animate={{
                                pathLength: 1,
                                opacity: 0.72,
                            }}
                            transition={{
                                duration: 2.2,
                                ease: "easeInOut",
                            }}
                        />

                        <motion.path
                            d="M200 45 C222 77 243 88 269 111 C291 131 304 155 320 196"
                            initial={{
                                pathLength: 0,
                                opacity: 0,
                            }}
                            animate={{
                                pathLength: 1,
                                opacity: 0.58,
                            }}
                            transition={{
                                delay: 0.35,
                                duration: 2.2,
                                ease: "easeInOut",
                            }}
                        />

                        <motion.path
                            d="M185 88 C158 99 139 113 115 128 C92 143 77 162 63 188"
                            initial={{
                                pathLength: 0,
                                opacity: 0,
                            }}
                            animate={{
                                pathLength: 1,
                                opacity: 0.42,
                            }}
                            transition={{
                                delay: 0.7,
                                duration: 2,
                            }}
                        />

                        <motion.path
                            d="M225 88 C248 97 270 104 292 121 C313 137 331 157 345 180"
                            initial={{
                                pathLength: 0,
                                opacity: 0,
                            }}
                            animate={{
                                pathLength: 1,
                                opacity: 0.42,
                            }}
                            transition={{
                                delay: 0.85,
                                duration: 2,
                            }}
                        />
                    </svg>
                </div>

                {/* Cuidado */}
                <AnimatePresence>
                    {introDone && !complete && (
                        <motion.div
                            className="relationship-care"
                            initial={{
                                opacity: 0,
                                y: 12,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                        >
                            <p>
                                Algunas cosas solo necesitan
                                un poquito de cuidado.
                            </p>

                            <motion.button
                                className="care-drop"
                                onClick={onWater}
                                whileTap={{
                                    scale: 0.87,
                                }}
                                animate={{
                                    y: [0, -4, 0],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                aria-label="Regar"
                            >
                                💧
                            </motion.button>

                            <span className="care-counter">
                                {careLevel} / 3
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Crecimiento */}
                <div
                    className="relationship-sprouts"
                    aria-hidden="true"
                >
                    {[1, 2, 3].map((item) => (
                        <AnimatePresence key={item}>
                            {careLevel >= item && (
                                <motion.div
                                    className={`relationship-sprout relationship-sprout--${item}`}
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 90,
                                        damping: 11,
                                    }}
                                >
                                    <span />
                                    <i />
                                    <b />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    ))}
                </div>

                {/* Cierre */}
                <AnimatePresence>
                    {complete && showFinalCopy && (
                        <motion.div
                            className="relationship-ending"
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <span>
                                tiempo · cuidado · constancia
                            </span>

                            <h3>
                                Y poco a poco,
                                <br />
                                empezó a crecer.
                            </h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default RelationshipGrowth;