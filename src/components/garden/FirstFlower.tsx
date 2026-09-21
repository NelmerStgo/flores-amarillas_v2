import {
    AnimatePresence,
    motion,
} from "motion/react";

interface FirstFlowerProps {
    isOpen: boolean;
    onOpen: () => void;
}

function FirstFlower({
    isOpen,
    onOpen,
}: FirstFlowerProps) {
    return (
        <div className="first-flower-wrapper">
            <motion.button
                className={`first-flower ${isOpen
                    ? "first-flower--open"
                    : ""
                    }`}
                onClick={onOpen}
                aria-label={
                    isOpen
                        ? "Flor encontrada"
                        : "Descubrir flor"
                }
                whileTap={
                    !isOpen
                        ? {
                            scale: 0.94,
                        }
                        : undefined
                }
                animate={
                    isOpen
                        ? {
                            rotate: [
                                0,
                                1.2,
                                0,
                                -1,
                                0,
                            ],
                        }
                        : {
                            rotate: [
                                -0.5,
                                0.8,
                                -0.5,
                            ],
                        }
                }
                transition={{
                    duration: isOpen
                        ? 6
                        : 4.5,

                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Luz que invita a tocar */}
                {!isOpen && (
                    <motion.span
                        className="first-flower-glow"
                        animate={{
                            opacity: [
                                0.12,
                                0.38,
                                0.15,
                            ],
                            scale: [
                                0.9,
                                1.2,
                                0.95,
                            ],
                        }}
                        transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                )}

                {/* Tallo */}
                <motion.span
                    className="first-flower-stem"
                    initial={{
                        scaleY: 0,
                    }}
                    animate={{
                        scaleY: 1,
                    }}
                    transition={{
                        duration: 1.1,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <span className="first-flower-leaf first-flower-leaf--left" />
                    <span className="first-flower-leaf first-flower-leaf--right" />
                </motion.span>

                {/* Cabeza */}
                <motion.span
                    className="first-flower-head"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.8,
                        type: "spring",
                        stiffness: 90,
                        damping: 12,
                    }}
                >
                    <span className="first-petal first-petal--1" />
                    <span className="first-petal first-petal--2" />
                    <span className="first-petal first-petal--3" />
                    <span className="first-petal first-petal--4" />
                    <span className="first-petal first-petal--5" />
                    <span className="first-petal first-petal--6" />
                    <span className="first-petal first-petal--7" />
                    <span className="first-petal first-petal--8" />

                    <span className="first-flower-center" />
                </motion.span>

                {/* Pequeñas partículas al abrirse */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.span
                            className="first-flower-pollen"
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
                            {[1, 2, 3, 4].map(
                                (particle) => (
                                    <motion.span
                                        key={particle}
                                        className={`first-pollen first-pollen--${particle}`}
                                        initial={{
                                            opacity: 0,
                                            scale: 0,
                                            y: 0,
                                        }}
                                        animate={{
                                            opacity: [
                                                0,
                                                0.8,
                                                0,
                                            ],
                                            scale: [
                                                0.5,
                                                1,
                                                0.7,
                                            ],
                                            y: [
                                                0,
                                                -18,
                                                -35,
                                            ],
                                        }}
                                        transition={{
                                            duration:
                                                2.8 +
                                                particle *
                                                0.2,
                                            delay:
                                                particle *
                                                0.16,
                                            repeat:
                                                Infinity,
                                            repeatDelay:
                                                1.5,
                                            ease: "easeOut",
                                        }}
                                    />
                                ),
                            )}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="first-flower-copy"
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.8,
                        }}
                    >
                        <p>
                            Curiosa, curiosa...
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default FirstFlower;