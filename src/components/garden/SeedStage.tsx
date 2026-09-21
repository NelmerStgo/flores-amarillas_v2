import { motion } from "motion/react";

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
            className="garden-stage"
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
                className={`seed-button ${isHolding
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
                    scale: 0.7,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 1.5,
                    type: "spring",
                }}
                whileTap={{
                    scale: 0.92,
                }}
            >
                <motion.span
                    className="seed-glow"
                    animate={{
                        opacity: isHolding
                            ? [0.2, 0.55, 0.3]
                            : [0.1, 0.2, 0.1],

                        scale: isHolding
                            ? [1, 1.35, 1.15, 2]
                            : [1, 1.08, 1],
                    }}
                    transition={{
                        duration: isHolding
                            ? 1.1
                            : 3,

                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/*acá la semilla pude ser una semilla o algo que se vea presionable*/}
                <motion.span
                    className="seed"
                    animate={{
                        scale: isHolding
                            ? [1, 2, 3]
                            : 1,

                        rotate: isHolding
                            ? [0, -2, 2, 0]
                            : 0,
                    }}
                    transition={{
                        duration: 0.9,
                        repeat: isHolding
                            ? Infinity
                            : 0,
                        ease: "easeInOut",
                    }}
                />
            </motion.button>

            <motion.span
                className="garden-hint"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.4,
                }}
                transition={{
                    delay: 2,
                }}
            >
                {/*Puede quedar vacio, o no*/}
                
            </motion.span>
        </motion.div>
    );
}

export default SeedStage;