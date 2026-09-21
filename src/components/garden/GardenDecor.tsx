import { AnimatePresence, motion } from "motion/react";

import butterflyBotanical from "../../assets/decor/butterfly-botanical.png";
import butterflyYellow from "../../assets/decor/butterfly-yellow.png";
import sparklesYellow from "../../assets/decor/sparkles-yellow.png";
import ladybugFlower from "../../assets/decor/ladybug-flower.png";
import daisies from "../../assets/decor/daisies.png";
import sunflowers from "../../assets/decor/sunflowers.png";
import yellowFlower from "../../assets/decor/yellow-flower.png";
import yellowRoses from "../../assets/decor/yellow-roses.png";
import bees from "../../assets/decor/bees.png";
import mushroomHouse from "../../assets/decor/mushroom-house.png";
import snailLantern from "../../assets/decor/snail-lantern.png";

export type GardenDecorPhase =
    | "arrival"
    | "relationship"
    | "memories"
    | "meaning"
    | "final";

interface GardenDecorProps {
    phase: GardenDecorPhase;
}

function GardenDecor({
    phase,
}: GardenDecorProps) {
    const relationshipVisible =
        phase === "relationship" ||
        phase === "memories" ||
        phase === "meaning" ||
        phase === "final";

    const memoriesVisible =
        phase === "memories" ||
        phase === "meaning" ||
        phase === "final";

    const finalVisible =
        phase === "final";

    return (
        <div
            className={`garden-decor garden-decor--${phase}`}
            aria-hidden="true"
        >
            {/* Ambiente permanente */}

            <motion.img
                src={butterflyBotanical}
                className="decor-item decor-butterfly decor-butterfly--botanical"
                alt=""
                animate={{
                    y: [0, -7, 2, -4, 0],
                    x: [0, 5, -2, 4, 0],
                    rotate: [-4, 3, -2, 2, -4],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.img
                src={butterflyYellow}
                className="decor-item decor-butterfly decor-butterfly--yellow"
                alt=""
                animate={{
                    y: [0, 9, -5, 4, 0],
                    x: [0, -9, 5, -3, 0],
                    rotate: [4, -4, 3, -2, 4],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.img
                src={sparklesYellow}
                className="decor-item decor-sparkles"
                alt=""
                animate={{
                    opacity: [0.32, 0.9, 0.4, 1, 0.32],
                    scale: [0.9, 1.08, 0.95, 1.04, 0.9],
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <AnimatePresence>
                {relationshipVisible && (
                    <>
                        <motion.img
                            key="ladybug"
                            src={ladybugFlower}
                            className="decor-item decor-ladybug"
                            alt=""
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 0.92,
                                y: 0,
                                rotate: [0, 1.5, 0, -1, 0],
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                opacity: {
                                    duration: 1.3,
                                },
                                y: {
                                    duration: 1.3,
                                },
                                rotate: {
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />

                        <motion.img
                            key="bees"
                            src={bees}
                            className="decor-item decor-bees"
                            alt=""
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            animate={{
                                opacity: 0.82,
                                scale: 1,
                                y: [0, -4, 1, -3, 0],
                            }}
                            transition={{
                                opacity: {
                                    duration: 1,
                                },
                                scale: {
                                    duration: 1,
                                },
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {memoriesVisible && (
                    <>
                        <motion.img
                            key="daisies"
                            src={daisies}
                            className="decor-item decor-daisies"
                            alt=""
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            animate={{
                                opacity: 0.9,
                                y: 0,
                                rotate: [0, -1, 0, 1, 0],
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                opacity: {
                                    duration: 1.4,
                                },
                                y: {
                                    duration: 1.4,
                                },
                                rotate: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />

                        <motion.img
                            key="yellow-flower"
                            src={yellowFlower}
                            className="decor-item decor-yellow-flower"
                            alt=""
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 0.82,
                                y: 0,
                                rotate: [0, 2, 0, -1.5, 0],
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                rotate: {
                                    duration: 7.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {finalVisible && (
                    <>
                        <motion.img
                            key="sunflowers"
                            src={sunflowers}
                            className="decor-item decor-sunflowers"
                            alt=""
                            initial={{
                                opacity: 0,
                                y: 70,
                                scale: 0.88,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                rotate: [0, 1, 0, -1, 0],
                            }}
                            transition={{
                                opacity: {
                                    duration: 1.5,
                                },
                                y: {
                                    duration: 1.5,
                                },
                                scale: {
                                    duration: 1.5,
                                },
                                rotate: {
                                    delay: 1.5,
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />

                        <motion.img
                            key="roses"
                            src={yellowRoses}
                            className="decor-item decor-yellow-roses"
                            alt=""
                            initial={{
                                opacity: 0,
                                y: 45,
                            }}
                            animate={{
                                opacity: 0.92,
                                y: 0,
                            }}
                            transition={{
                                duration: 1.4,
                                delay: 0.25,
                            }}
                        />

                        <motion.img
                            key="house"
                            src={mushroomHouse}
                            className="decor-item decor-mushroom-house"
                            alt=""
                            initial={{
                                opacity: 0,
                                scale: 0.78,
                                y: 30,
                            }}
                            animate={{
                                opacity: 0.95,
                                scale: 1,
                                y: [0, -2, 0],
                            }}
                            transition={{
                                opacity: {
                                    duration: 1.2,
                                    delay: 0.4,
                                },
                                scale: {
                                    duration: 1.2,
                                    delay: 0.4,
                                },
                                y: {
                                    delay: 1.6,
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />

                        <motion.img
                            key="snail"
                            src={snailLantern}
                            className="decor-item decor-snail"
                            alt=""
                            initial={{
                                opacity: 0,
                                x: -15,
                            }}
                            animate={{
                                opacity: 0.94,
                                x: [0, 4, 8, 12],
                                y: [0, -1, 0, -1],
                            }}
                            transition={{
                                opacity: {
                                    duration: 1.2,
                                    delay: 0.7,
                                },
                                x: {
                                    duration: 18,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "linear",
                                },
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default GardenDecor;