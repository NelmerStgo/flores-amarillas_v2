import { AnimatePresence, motion } from "motion/react";

import type { LightPosition } from "../hooks/useGardenJourney";

interface GuideLightProps {
    visible: boolean;
    complete: boolean;

    currentStep: number;
    positions: LightPosition[];

    onFollow: () => void;
}

function GuideLight({
    visible,
    complete,
    currentStep,
    positions,
    onFollow,
}: GuideLightProps) {
    return (
        <AnimatePresence mode="wait">
            {visible && !complete && (
                <motion.div
                    key="moving-light"
                    className="mystery-area"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    <motion.button
                        className="mystery-light-button"
                        onClick={onFollow}
                        aria-label="Seguir la luz"
                        initial={{
                            opacity: 0,
                            scale: 0.3,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,

                            x: positions[currentStep].x,
                            y: positions[currentStep].y,
                        }}
                        transition={{
                            opacity: {
                                duration: 1.5,
                            },

                            scale: {
                                type: "spring",
                                stiffness: 130,
                                damping: 14,
                            },

                            x: {
                                type: "spring",
                                stiffness: 70,
                                damping: 14,
                            },

                            y: {
                                type: "spring",
                                stiffness: 70,
                                damping: 14,
                            },
                        }}
                        whileTap={{
                            scale: 0.78,
                        }}
                    >
                        <motion.span
                            className="mystery-light"
                            animate={{
                                opacity: [
                                    0.45,
                                    1,
                                    0.6,
                                    1,
                                ],

                                scale: [
                                    0.9,
                                    1.15,
                                    0.95,
                                    1,
                                ],
                            }}
                            transition={{
                                duration: 2.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            ✦
                        </motion.span>
                    </motion.button>
                </motion.div>
            )}

            {complete && (
                <motion.div
                    key="light-complete"
                    className="light-complete"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    <motion.div
                        className="light-final-glow"
                        initial={{
                            scale: 0.2,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />

                    <motion.span
                        className="light-final-symbol"
                        initial={{
                            opacity: 0,
                            scale: 0.4,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: 0.4,
                            type: "spring",
                            stiffness: 90,
                            damping: 12,
                        }}
                    >
                        ✦
                    </motion.span>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 0.6,
                            y: 0,
                        }}
                        transition={{
                            delay: 1.1,
                            duration: 1,
                        }}
                    >
                        Lo conseguiste jsjsjs
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default GuideLight;