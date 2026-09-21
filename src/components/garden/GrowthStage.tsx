import { motion } from "motion/react";
import { Lottie } from "lottie-react";
import GuideLight from "./GuideLight";

import type { LightPosition } from "../hooks/useGardenJourney";
import seedlingAnimation from "../../assets/animations/seedling.json";

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
            }}
            transition={{
                duration: 0.8,
            }}
        >
            <div className="sprout-wrapper growth-plant-wrapper">
                <motion.div
                    className="growth-aura"
                    initial={{
                        opacity: 0,
                        scale: 0.6,
                    }}
                    animate={{
                        opacity: [
                            0.1,
                            0.28,
                            0.14,
                        ],

                        scale: [
                            0.9,
                            1.1,
                            1,
                        ],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="growth-seedling-lottie"
                    initial={{
                        opacity: 0,
                        scale: 0.82,
                        y: 16,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
                    }}
                >
                    <Lottie
                        src={seedlingAnimation}
                        loop={false}
                        autoplay
                    />
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