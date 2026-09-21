import {
    AnimatePresence,
    motion,
} from "motion/react";

import gardenDay from "../../assets/backgrounds/garden-day.webp";
import gardenSunset from "../../assets/backgrounds/garden-sunset.webp";

export type ArtisticPhase =
    | "dawn"
    | "day"
    | "sunset";

interface ArtisticBackdropProps {
    phase: ArtisticPhase;
}

const phaseImages: Record<
    ArtisticPhase,
    string
> = {
    dawn: gardenDay,
    day: gardenDay,
    sunset: gardenSunset,
};

function ArtisticBackdrop({
    phase,
}: ArtisticBackdropProps) {
    return (
        <div
            className={`artistic-backdrop artistic-backdrop--${phase}`}
            aria-hidden="true"
        >
            <AnimatePresence mode="sync">
                <motion.img
                    key={phase}
                    src={phaseImages[phase]}
                    className="artistic-backdrop-image"
                    initial={{
                        opacity: 0,
                        scale: 1.06,
                    }}
                    animate={{
                        opacity: 1,
                        scale: [1.04, 1.08, 1.04],
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        opacity: {
                            duration: 2.2,
                        },

                        scale: {
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />
            </AnimatePresence>

            <div className="artistic-backdrop-veil" />

            <motion.div
                className="artistic-backdrop-light"
                animate={{
                    opacity: [
                        0.2,
                        0.38,
                        0.2,
                    ],

                    scale: [
                        1,
                        1.08,
                        1,
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

export default ArtisticBackdrop;