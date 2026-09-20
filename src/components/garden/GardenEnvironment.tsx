import { AnimatePresence, motion } from "motion/react";

import FirstFlower from "./FirstFlower";
import RelationshipGrowth from "./RelationshipGrowth";
import MemoriesDiscovery from "./MemoriesDiscovery";
import MeaningDiscovery from "./MeaningDiscovery";
import FinalGarden from "./FinalGarden";
import GardenBackdrop from "./GardenBackdrop";

import ArtisticBackdrop, {
    type ArtisticPhase,
} from "./ArtisticBackdrop";

interface GardenEnvironmentProps {
    introDone: boolean;

    firstFlowerOpen: boolean;
    distantSignalVisible: boolean;

    rootsDiscoveryOpen: boolean;
    rootsNarrationDone: boolean;

    careLevel: number;
    careDiscoveryComplete: boolean;

    memoriesVisible: boolean;
    memoriesComplete: boolean;

    meaningOpen: boolean;
    finalGardenVisible: boolean;

    onFirstFlowerOpen: () => void;
    onRootsDiscoveryOpen: () => void;
    onWaterGarden: () => void;
    onMemoriesComplete: () => void;
    onOpenMeaning: () => void;
}



function GardenEnvironment({
    introDone,

    firstFlowerOpen,
    distantSignalVisible,

    rootsDiscoveryOpen,
    rootsNarrationDone,

    careLevel,
    careDiscoveryComplete,

    onFirstFlowerOpen,
    onRootsDiscoveryOpen,
    onWaterGarden,
    onMemoriesComplete,
    memoriesVisible,
    memoriesComplete,
    meaningOpen,
    finalGardenVisible,
    onOpenMeaning,
}: GardenEnvironmentProps) {

    const artisticPhase: ArtisticPhase =
        finalGardenVisible ||
            meaningOpen
            ? "sunset"
            : memoriesVisible
                ? "day"
                : "dawn";

    return (
        <motion.div
            key="environment-stage"
            className="environment-stage"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 2,
            }}
        >
            <ArtisticBackdrop
                phase={artisticPhase}
            />

            <GardenBackdrop />

            <div
                className="environment-backdrop"
                aria-hidden="true"
            >
                <motion.div
                    className="environment-halo"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 2.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                <motion.div
                    className="environment-ground"
                    initial={{
                        opacity: 0,
                        scaleY: 0.7,
                    }}
                    animate={{
                        opacity: 1,
                        scaleY: 1,
                    }}
                    transition={{
                        duration: 2,
                    }}
                />

                <motion.div
                    className="garden-path"
                    initial={{
                        opacity: 0,
                        scaleY: 0.7,
                    }}
                    animate={{
                        opacity: introDone
                            ? 0.6
                            : 0.15,

                        scaleY: 1,
                    }}
                    transition={{
                        duration: 2,
                    }}
                />

                <motion.div
                    className="environment-plant environment-plant--left"
                    initial={{
                        opacity: 0,
                        x: -25,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 1.8,
                    }}
                >
                    <span className="environment-stem" />
                    <span className="environment-leaf environment-leaf--a" />
                    <span className="environment-leaf environment-leaf--b" />
                    <span className="environment-leaf environment-leaf--c" />
                </motion.div>

                <motion.div
                    className="environment-plant environment-plant--right"
                    initial={{
                        opacity: 0,
                        x: 25,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: 0.9,
                        duration: 1.8,
                    }}
                >
                    <span className="environment-stem" />
                    <span className="environment-leaf environment-leaf--a" />
                    <span className="environment-leaf environment-leaf--b" />
                    <span className="environment-leaf environment-leaf--c" />
                </motion.div>
            </div>

            {/* Luz que guía hasta la flor */}
            <motion.div
                className={`environment-guide-light ${introDone
                    ? "environment-guide-light--flower"
                    : ""
                    }`}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,

                    x: introDone
                        ? 90
                        : 0,

                    y: introDone
                        ? 280
                        : 0,
                }}
                transition={{
                    opacity: {
                        duration: 2,
                    },

                    x: {
                        duration: 2.6,
                        ease: [0.22, 1, 0.36, 1],
                    },

                    y: {
                        duration: 2.6,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
            >
                <motion.span
                    animate={{
                        opacity: [0.55, 1, 0.65, 1],
                        scale: [0.9, 1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ✦
                </motion.span>
            </motion.div>

            {/* Texto inicial */}
            <AnimatePresence>
                {!introDone && (
                    <motion.div
                        className="environment-copy"
                        initial={{
                            opacity: 0,
                            y: 18,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -12,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                    >
                        <span className="journey-number">
                            03
                        </span>

                        <h2>Algo cambió.</h2>

                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 0.55,
                            }}
                            transition={{
                                delay: 0.8,
                                duration: 1,
                            }}
                        >
                            El camino ya no se siente igual.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {introDone && (
                <FirstFlower
                    isOpen={firstFlowerOpen}
                    onOpen={onFirstFlowerOpen}
                />
            )}

            {/* Ondas */}
            <AnimatePresence>
                {firstFlowerOpen && (
                    <motion.div
                        className="garden-ripple-origin"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                    >
                        <motion.span
                            className="garden-ripple garden-ripple--one"
                            initial={{
                                scale: 0.2,
                                opacity: 0.7,
                            }}
                            animate={{
                                scale: 4,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 2.4,
                                ease: "easeOut",
                            }}
                        />

                        <motion.span
                            className="garden-ripple garden-ripple--two"
                            initial={{
                                scale: 0.2,
                                opacity: 0.45,
                            }}
                            animate={{
                                scale: 4.8,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 2.8,
                                delay: 0.3,
                                ease: "easeOut",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Algo responde a lo lejos */}
            <AnimatePresence>
                {distantSignalVisible &&
                    !rootsDiscoveryOpen && (
                        <motion.button
                            className="distant-signal"
                            onClick={onRootsDiscoveryOpen}
                            aria-label="Descubrir qué respondió"
                            initial={{
                                opacity: 0,
                                scale: 0.4,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            transition={{
                                duration: 1.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileTap={{
                                scale: 0.85,
                            }}
                        >
                            <motion.span
                                className="distant-signal-glow"
                                animate={{
                                    opacity: [
                                        0.25,
                                        0.75,
                                        0.35,
                                        0.75,
                                    ],

                                    scale: [
                                        0.9,
                                        1.15,
                                        1,
                                        1.15,
                                    ],
                                }}
                                transition={{
                                    duration: 3.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            <motion.span
                                className="distant-signal-core"
                                animate={{
                                    y: [0, -3, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                ·
                            </motion.span>
                        </motion.button>
                    )}
            </AnimatePresence>

            <RelationshipGrowth
                visible={rootsDiscoveryOpen}
                introDone={rootsNarrationDone}
                careLevel={careLevel}
                complete={careDiscoveryComplete}
                showFinalCopy={!memoriesVisible}
                onWater={onWaterGarden}
            />

            <MemoriesDiscovery
                visible={
                    memoriesVisible &&
                    !finalGardenVisible
                }
                complete={memoriesComplete}
                meaningOpen={meaningOpen}
                onComplete={onMemoriesComplete}
                onOpenMeaning={onOpenMeaning}
            />

            <AnimatePresence mode="wait">
                {meaningOpen &&
                    !finalGardenVisible && (
                        <MeaningDiscovery
                            key="meaning"
                        />
                    )}

                {finalGardenVisible && (
                    <FinalGarden
                        key="final-garden"
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default GardenEnvironment;