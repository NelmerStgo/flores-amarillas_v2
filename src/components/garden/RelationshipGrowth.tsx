import { AnimatePresence, motion } from "motion/react";

interface RelationshipGrowthProps {
    visible: boolean;
    introDone: boolean;

    careLevel: number;
    complete: boolean;

    showFinalCopy: boolean;

    onWater: () => void;
}

const careWords = [
    "tiempo",
    "confianza",
    "cuidado",
    "paciencia",
    "cariño",
    "constancia",
] as const;

function RelationshipGrowth({
    visible,
    introDone,
    careLevel,
    complete,
    showFinalCopy,
    onWater,
}: RelationshipGrowthProps) {
    if (!visible) return null;

    const visibleCareWords =
        careWords.slice(
            0,
            Math.min(
                careLevel * 2,
                careWords.length,
            ),
        );

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
                                ¿Recuerdas cómo empezó todo?
                            </span>

                            <h3>
                                Poco a poco nos fuimos
                                <br />
                                conociendo.
                            </h3>

                            <p>
                                Y sin darnos cuenta, empezaron a brotar raíces:
                                señal de que aquello que sentíamos estaba
                                encontrando su lugar.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div
                    className="relationship-parent-plant"
                    aria-hidden="true"
                >
                    <motion.span
                        className="relationship-parent-stem"
                        initial={{
                            scaleY: 0,
                        }}
                        animate={{
                            scaleY: 1,
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />

                    <motion.span
                        className="relationship-parent-flower"
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: 0.7,
                            type: "spring",
                            stiffness: 90,
                            damping: 12,
                        }}
                    >
                        <i />
                    </motion.span>
                </div>

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
                                Como todo lo que vale la pena,
                                también necesitaba cuidado.
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

                            <div
                                className="care-live-words"
                                aria-live="polite"
                            >
                                <AnimatePresence>
                                    {visibleCareWords.map(
                                        (word, index) => (
                                            <motion.span
                                                key={word}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.72,
                                                    y: 12,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    y:
                                                        index % 2 === 0
                                                            ? -4
                                                            : 4,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 120,
                                                    damping: 12,
                                                }}
                                            >
                                                {word}
                                            </motion.span>
                                        ),
                                    )}
                                </AnimatePresence>
                            </div>
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
                            <h3>
                                ¿Podemos?
                                <br />
                                Pero claaaaaaaro que podemos 🤩
                            </h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default RelationshipGrowth;