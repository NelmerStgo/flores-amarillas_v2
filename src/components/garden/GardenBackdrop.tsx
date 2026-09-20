import { motion } from "motion/react";

const particles = [
    { className: "garden-particle--1", delay: 0 },
    { className: "garden-particle--2", delay: 1.2 },
    { className: "garden-particle--3", delay: 0.5 },
    { className: "garden-particle--4", delay: 1.8 },
    { className: "garden-particle--5", delay: 0.9 },
];

function GardenBackdrop() {
    return (
        <div
            className="garden-backdrop"
            aria-hidden="true"
        >
            {/* Luz del horizonte */}
            <motion.div
                className="garden-backdrop-sun"
                initial={{
                    opacity: 0,
                    scale: 0.65,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 3,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />

            {/* Colina lejana */}
            <motion.div
                className="garden-hill garden-hill--far"
                initial={{
                    opacity: 0,
                    y: 35,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 2.2,
                }}
            />

            {/* Colina media */}
            <motion.div
                className="garden-hill garden-hill--middle"
                initial={{
                    opacity: 0,
                    y: 45,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 2.4,
                    delay: 0.15,
                }}
            />

            {/* Niebla */}
            <motion.div
                className="garden-mist garden-mist--one"
                animate={{
                    x: [-15, 20, -15],
                    opacity: [0.16, 0.28, 0.16],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="garden-mist garden-mist--two"
                animate={{
                    x: [20, -18, 20],
                    opacity: [0.1, 0.22, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Suelo */}
            <div className="garden-ground" />

            {/* Vegetación lateral */}
            <motion.div
                className="garden-foliage garden-foliage--left"
                animate={{
                    rotate: [-1.5, 1.2, -1.5],
                }}
                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span />
                <span />
                <span />
                <span />
            </motion.div>

            <motion.div
                className="garden-foliage garden-foliage--right"
                animate={{
                    rotate: [1.2, -1.4, 1.2],
                }}
                transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span />
                <span />
                <span />
                <span />
            </motion.div>

            {/* Partículas ambientales */}
            <div className="garden-particles">
                {particles.map(
                    ({ className, delay }) => (
                        <motion.span
                            key={className}
                            className={`garden-particle ${className}`}
                            animate={{
                                opacity: [
                                    0,
                                    0.5,
                                    0.25,
                                    0,
                                ],
                                y: [
                                    8,
                                    0,
                                    -12,
                                    -22,
                                ],
                                x: [
                                    0,
                                    4,
                                    -2,
                                    3,
                                ],
                            }}
                            transition={{
                                duration: 5,
                                delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ),
                )}
            </div>
        </div>
    );
}

export default GardenBackdrop;