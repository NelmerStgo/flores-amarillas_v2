import { motion } from "motion/react";

import GuideLight from "./GuideLight";

import type { LightPosition } from "../hooks/useGardenJourney";

interface GrowthStageProps {
    mysteryAppeared: boolean;

    lightStep: number;
    lightPositions: LightPosition[];

    lightJourneyComplete: boolean;

    onFollowLight: () => void;
}

function GrowthStage({
    mysteryAppeared,
    lightStep,
    lightPositions,
    lightJourneyComplete,
    onFollowLight,
}: GrowthStageProps) {
    return (
        <motion.div
            key="grown-stage"
            className="garden-stage"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.97,
                y: 15,
            }}
            transition={{
                duration: 1,
            }}
        >
            <div className="sprout-wrapper">
                <motion.div
                    className="growth-aura"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: [0.14, 0.28, 0.17],
                        scale: [0.9, 1.12, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="sprout"
                    initial={{
                        scale: 0,
                        y: 20,
                    }}
                    animate={{
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                    }}
                >
                    <motion.span
                        className="sprout-leaf sprout-leaf--left"
                        initial={{
                            scale: 0,
                            rotate: 20,
                        }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                        }}
                        transition={{
                            delay: 0.55,
                            duration: 0.6,
                        }}
                    />

                    <motion.span
                        className="sprout-leaf sprout-leaf--right"
                        initial={{
                            scale: 0,
                            rotate: -20,
                        }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.6,
                        }}
                    />

                    <span className="sprout-stem" />
                </motion.div>
            </div>

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
                    delay: 1,
                    duration: 0.8,
                }}
            >
                Y de ahí empezó a crecer
                <br />
                una relación bonita.
            </motion.h2>

            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                transition={{
                    delay: 1.6,
                }}
            >
                Y como una plantita,
                necesitaba sus cuidados para crecer fuerte.
            </motion.p>

            <GuideLight
                visible={mysteryAppeared}
                complete={lightJourneyComplete}
                currentStep={lightStep}
                positions={lightPositions}
                onFollow={onFollowLight}
            />
        </motion.div>
    );
}

export default GrowthStage;