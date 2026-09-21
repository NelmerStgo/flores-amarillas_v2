import {
    AnimatePresence,
    motion,
} from "motion/react";

import juntosIlustracion from "../../assets/memes/gato-seduction.jpg";
import girasolAbierto  from "../../assets/decor/girasol.png";
import girasolCerrado from "../../assets/decor/girasol-cerrado.png";

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
                            scale: 0.95,
                        }
                        : undefined
                }
                animate={{
                    rotate: isOpen
                        ? [
                            0,
                            0.8,
                            0,
                            -0.8,
                            0,
                        ]
                        : [
                            -0.4,
                            0.5,
                            -0.4,
                        ],
                }}
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
                                0.15,
                                0.48,
                                0.18,
                            ],

                            scale: [
                                0.9,
                                1.24,
                                0.95,
                            ],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                )}

                {/* Girasol cerrado → abierto */}
                <div className="first-flower-image-stage">
                    <AnimatePresence
                        mode="sync"
                        initial={false}
                    >
                        {!isOpen ? (
                            <motion.img
                                key="closed"
                                src={girasolCerrado}
                                alt=""
                                className="
                    first-flower-image
                    first-flower-image--closed
                "
                                draggable={false}
                                initial={{
                                    opacity: 0,
                                    scale: 0.84,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 0.9,
                                    y: 6,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 1.02,
                                    y: -5,
                                    filter:
                                        "brightness(1.16) saturate(1.12)",
                                }}
                                transition={{
                                    duration: 0.65,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                            />
                        ) : (
                            <motion.img
                                key="open"
                                src={girasolAbierto}
                                alt=""
                                className="
                    first-flower-image
                    first-flower-image--open
                "
                                draggable={false}
                                initial={{
                                    opacity: 0,
                                    scale: 0.74,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: [
                                        0.74,
                                        1.07,
                                        1,
                                    ],
                                    y: [
                                        12,
                                        -4,
                                        0,
                                    ],
                                    filter: [
                                        "brightness(0.9) saturate(0.9)",
                                        "brightness(1.15) saturate(1.16)",
                                        "brightness(1) saturate(1)",
                                    ],
                                }}
                                transition={{
                                    duration: 1.15,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>

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
                                                0.9,
                                                0,
                                            ],

                                            scale: [
                                                0.5,
                                                1,
                                                0.7,
                                            ],

                                            y: [
                                                0,
                                                -20,
                                                -42,
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

                                            ease:
                                                "easeOut",
                                        }}
                                    />
                                ),
                            )}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Texto después de abrir */}
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
                            delay: 0.75,
                            duration: 0.8,
                        }}
                    >
                        <p>
                            Curiosa, curiosa...
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Easter egg */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="flower-surprise"
                        initial={{
                            opacity: 0,
                            scale: 0.88,
                            y: 12,
                            rotate: -3,
                        }}
                        animate={{
                            opacity: [
                                0,
                                1,
                                1,
                                0,
                            ],

                            scale: [
                                0.88,
                                1,
                                1,
                                0.96,
                            ],

                            y: [
                                12,
                                0,
                                0,
                                -10,
                            ],

                            rotate: [
                                -3,
                                1,
                                1,
                                2,
                            ],
                        }}
                        transition={{
                            duration: 2.8,

                            times: [
                                0,
                                0.14,
                                0.78,
                                1,
                            ],

                            ease: "easeInOut",
                        }}
                    >
                        <img
                            src={juntosIlustracion}
                            alt=""
                        />

                        <span>
                            Mhm Mhm 👀
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default FirstFlower;