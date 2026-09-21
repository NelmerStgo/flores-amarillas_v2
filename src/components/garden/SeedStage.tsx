import { motion } from "motion/react";

import seedIcon from "../../assets/decor/seed.svg";

interface SeedStageProps {
    isHolding: boolean;

    onHoldStart: () => void;
    onHoldEnd: () => void;
}

function SeedStage({
    isHolding,
    onHoldStart,
    onHoldEnd,
}: SeedStageProps) {
    return (
        <motion.div
            key="seed-stage"
            className="garden-stage garden-stage--seed"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
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
                    delay: 0.4,
                }}
            >
                Y así, poco a poco fue creciendo algo.
            </motion.h2>

            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.65,
                }}
                transition={{
                    delay: 0.9,
                    duration: 0.8,
                }}
            >
                Un sentimiento profundo comenzó a surgir.
            </motion.p>

            <motion.button
                className={`seed-button seed-button--art ${isHolding
                        ? "seed-button--holding"
                        : ""
                    }`}
                onPointerDown={onHoldStart}
                onPointerUp={onHoldEnd}
                onPointerLeave={onHoldEnd}
                onPointerCancel={onHoldEnd}
                aria-label="Mantén presionado para hacer crecer la semilla"
                initial={{
                    opacity: 0,
                    scale: 0.72,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 1.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 14,
                }}
                whileTap={{
                    scale: 0.96,
                }}
            >
                <motion.span
                    className="seed-pressure-ring"
                    animate={{
                        opacity: isHolding
                            ? [0.35, 0.8, 0.3]
                            : [0.12, 0.35, 0.12],

                        scale: isHolding
                            ? [0.9, 1.45, 1.8]
                            : [0.9, 1.08, 0.9],
                    }}
                    transition={{
                        duration: isHolding
                            ? 1.25
                            : 2.8,

                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.span
                    className="seed-glow"
                    animate={{
                        opacity: isHolding
                            ? [0.28, 0.7, 0.4]
                            : [0.1, 0.24, 0.1],

                        scale: isHolding
                            ? [1, 1.45, 1.7]
                            : [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 1.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.img
                    src={seedIcon}
                    alt=""
                    className="seed-art"
                    animate={{
                        y: isHolding
                            ? [0, 3, 1]
                            : [0, -3, 0],

                        rotate: isHolding
                            ? [-2, 2, -1]
                            : [-1, 1, -1],

                        scale: isHolding
                            ? 1.08
                            : 1,
                    }}
                    transition={{
                        duration: isHolding
                            ? 0.75
                            : 3,

                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <svg
                    className="seed-root-preview"
                    viewBox="0 0 80 80"
                    aria-hidden="true"
                >
                    <motion.path
                        d="
                            M39 8
                            C41 23 34 29 39 41
                            C44 52 36 59 31 72
                        "
                        initial={{
                            pathLength: 0,
                            opacity: 0,
                        }}
                        animate={{
                            pathLength:
                                isHolding
                                    ? 1
                                    : 0,

                            opacity:
                                isHolding
                                    ? 0.72
                                    : 0,
                        }}
                        transition={{
                            duration: 1.35,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
            </motion.button>
        </motion.div>
    );
}

export default SeedStage;