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
            className="garden-stage garden-stage--growth"
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
            <div className="sprout-wrapper growth-plant-wrapper">
                <motion.div
                    className="growth-aura"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: [
                            0.12,
                            0.3,
                            0.15,
                        ],

                        scale: [
                            0.9,
                            1.12,
                            1,
                        ],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.svg
                    className="growth-plant-svg"
                    viewBox="0 0 180 230"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    aria-hidden="true"
                >
                    <motion.path
                        className="growth-plant-stem"
                        d="
                M91 211
                C90 184 94 160 91 139
                C88 115 86 94 91 73
                C94 57 96 44 97 28
            "
                        initial={{
                            pathLength: 0,
                        }}
                        animate={{
                            pathLength: 1,
                        }}
                        transition={{
                            duration: 1.8,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    />

                    <motion.path
                        className="growth-plant-leaf growth-plant-leaf--left"
                        d="
                M90 132
                C68 104 43 101 27 112
                C46 136 67 145 90 132
                Z
            "
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.8,
                        }}
                    />

                    <motion.path
                        className="growth-plant-leaf growth-plant-leaf--right"
                        d="
                M92 92
                C111 66 139 64 153 77
                C137 102 114 109 92 92
                Z
            "
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: 1.1,
                            duration: 0.8,
                        }}
                    />

                    <motion.path
                        className="growth-plant-leaf growth-plant-leaf--small"
                        d="
                M96 54
                C108 38 125 37 134 45
                C125 61 111 66 96 54
                Z
            "
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 0.85,
                        }}
                        transition={{
                            delay: 1.45,
                            duration: 0.7,
                        }}
                    />

                    <motion.circle
                        className="growth-plant-bud"
                        cx="97"
                        cy="27"
                        r="9"
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: 1.55,
                            type: "spring",
                            stiffness: 100,
                            damping: 11,
                        }}
                    />
                </motion.svg>
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
                Y una bonita relación comenzó a surgir
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
                requiere de sus debidos cuidados para que crezca fuerte y sana.
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