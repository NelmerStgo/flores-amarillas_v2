import { AnimatePresence, motion } from "motion/react";

import Scene, { type SceneTheme } from "../components/Scene";

import SeedStage from "../components/garden/SeedStage";
import GrowthStage from "../components/garden/GrowthStage";
import GardenEnvironment from "../components/garden/GardenEnvironment";

import { useGardenJourney } from "../components/hooks/useGardenJourney";

interface GardenSceneProps {
    onBack: () => void;
    onHome: () => void;
}

function GardenScene({
    onBack,
    onHome,
}: GardenSceneProps) {
    const garden = useGardenJourney();

    const gardenTheme: SceneTheme =
        garden.finalGardenVisible
            ? "sunset"
            : garden.meaningOpen
                ? "sunset"
                : garden.memoriesVisible
                    ? "day"
                    : garden.environmentRevealed
                        ? "dawn"
                        : "night";

    return (
        <Scene
            theme={gardenTheme}
            className={`garden-scene ${garden.lightJourneyComplete
                ? "garden-scene--awakened"
                : ""
                } ${garden.environmentRevealed
                    ? "garden-scene--entered"
                    : ""
                }`}
        >
            <div className="garden-ambient" />

            <div
                className={`garden-night-landscape ${garden.hasGrown
                        ? "garden-night-landscape--growing"
                        : ""
                    }`}
                aria-hidden="true"
            >
                <div className="garden-night-horizon" />

                <motion.div
                    className="garden-dawn-hint"
                    animate={{
                        opacity: garden.hasGrown
                            ? [0.2, 0.35, 0.24]
                            : 0,
                        scale: garden.hasGrown
                            ? [0.9, 1.05, 0.95]
                            : 0.8,
                    }}
                    transition={{
                        duration: 5,
                        repeat: garden.hasGrown
                            ? Infinity
                            : 0,
                        ease: "easeInOut",
                    }}
                />

                <div className="garden-night-grass garden-night-grass--left">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="garden-night-grass garden-night-grass--right">
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            <button
                className={`scene-back-button ${garden.finalGardenVisible
                    ? "scene-back-button--home"
                    : ""
                    }`}
                onClick={
                    garden.finalGardenVisible
                        ? onHome
                        : onBack
                }
                aria-label={
                    garden.finalGardenVisible
                        ? "Volver al inicio"
                        : "Volver"
                }
            >
                {garden.finalGardenVisible
                    ? "⌂"
                    : "←"}
            </button>

            <div className="garden-content">
                {!garden.environmentRevealed && (
                    <motion.span
                        className="journey-number"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 0.45,
                        }}
                        transition={{
                            delay: 0.3,
                        }}
                    >
                        02
                    </motion.span>
                )}

                <AnimatePresence mode="wait">
                    {!garden.hasGrown ? (
                        <SeedStage
                            key="seed"
                            isHolding={garden.isHolding}
                            onHoldStart={
                                garden.startHolding
                            }
                            onHoldEnd={
                                garden.stopHolding
                            }
                        />
                    ) : !garden.environmentRevealed ? (
                        <GrowthStage
                            key="growth"
                            mysteryAppeared={
                                garden.mysteryAppeared
                            }
                            lightStep={
                                garden.lightStep
                            }
                            lightPositions={
                                garden.lightPositions
                            }
                            lightJourneyComplete={
                                garden.lightJourneyComplete
                            }
                            onFollowLight={
                                garden.followLight
                            }
                        />
                    ) : (
                        <GardenEnvironment
                            key="environment"

                            introDone={
                                garden.environmentIntroDone
                            }

                            firstFlowerOpen={
                                garden.firstFlowerOpen
                            }

                            distantSignalVisible={
                                garden.distantSignalVisible
                            }

                            rootsDiscoveryOpen={
                                garden.rootsDiscoveryOpen
                            }

                            rootsNarrationDone={
                                garden.rootsNarrationDone
                            }

                            careLevel={
                                garden.careLevel
                            }

                            careDiscoveryComplete={
                                garden.careDiscoveryComplete
                            }

                            onFirstFlowerOpen={
                                garden.openFirstFlower
                            }

                            onRootsDiscoveryOpen={
                                garden.openRootsDiscovery
                            }

                            onWaterGarden={
                                garden.waterGarden
                            }

                            memoriesVisible={
                                garden.memoriesVisible
                            }

                            memoriesComplete={
                                garden.memoriesComplete
                            }

                            onMemoriesComplete={
                                garden.completeMemories
                            }

                            meaningOpen={
                                garden.meaningOpen
                            }

                            finalGardenVisible={
                                garden.finalGardenVisible
                            }

                            onOpenMeaning={
                                garden.openMeaning
                            }
                        />
                    )}
                </AnimatePresence>
            </div>
        </Scene>
    );
}

export default GardenScene;