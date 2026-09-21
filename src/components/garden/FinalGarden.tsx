import { motion } from "motion/react";

const floatingLights = [
    {
        className: "final-light--one",
        duration: 4.5,
        delay: 0,
    },
    {
        className: "final-light--two",
        duration: 5.2,
        delay: 0.8,
    },
    {
        className: "final-light--three",
        duration: 4.8,
        delay: 1.4,
    },
    {
        className: "final-light--four",
        duration: 5.6,
        delay: 0.4,
    },
];

function FinalGarden() {
    return (
        <motion.div
            className="final-garden"
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
            {/* =====================================
          LUZ GENERAL
          ===================================== */}

            <motion.div
                className="final-garden-light"
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: [0.65, 1, 0.75, 1],
                    scale: [1, 1.06, 1, 1.04],
                }}
                transition={{
                    opacity: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },

                    scale: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            />

            {/* =====================================
          PEQUEÑAS LUCES
          ===================================== */}

            <div
                className="final-floating-lights"
                aria-hidden="true"
            >
                {floatingLights.map(
                    (
                        {
                            className,
                            duration,
                            delay,
                        },
                        index,
                    ) => (
                        <motion.span
                            key={className}
                            className={`final-floating-light ${className}`}
                            initial={{
                                opacity: 0,
                                scale: 0,
                            }}
                            animate={{
                                opacity: [
                                    0,
                                    0.75,
                                    0.35,
                                    0.8,
                                    0,
                                ],

                                scale: [
                                    0.6,
                                    1,
                                    0.85,
                                    1,
                                    0.6,
                                ],

                                y: [
                                    5,
                                    -5,
                                    -12,
                                    -18,
                                    -24,
                                ],
                            }}
                            transition={{
                                duration,
                                delay:
                                    delay + index * 0.1,

                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            ✦
                        </motion.span>
                    ),
                )}
            </div>

            {/* =====================================
          MENSAJE FINAL
          ===================================== */}

            <div className="final-garden-copy">
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 0.55,
                    }}
                    transition={{
                        delay: 2.4,
                        duration: 1,
                    }}
                >
                    Y como dijo zoé:
                    <br></br>
                    Es raro el amor, que se te aparece, cuando
                    menos piensas
                </motion.p>

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
                        delay: 3,
                        duration: 1.2,
                    }}
                >
                    Mira cuánto ha crecido
                </motion.h2>

                <motion.div
                    className="final-continuation"
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 4.5,
                        duration: 1.2,
                    }}
                >
                    <p>
                        ¿Y sabes qué es lo mejor?
                        <br />
                        Que esto todavía no termina. 🙌
                    </p>

                    <motion.span
                        className="final-continuation-symbol"
                        animate={{
                            opacity: [
                                0.35,
                                1,
                                0.35,
                            ],

                            scale: [
                                0.9,
                                1.1,
                                0.9,
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        ✦
                    </motion.span>

                    <motion.strong
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 0.8,
                        }}
                        transition={{
                            delay: 1.2,
                            duration: 1,
                        }}
                    >
                        Todavía nos quedan aventuras, recuerdos
                        <br />
                        y un montón de cosas por florecer.
                    </motion.strong>
                </motion.div>
            </div>

            <motion.p
                className="final-development-note"
                initial={{
                    opacity: 0,
                    y: 8,
                }}
                animate={{
                    opacity: 0.72,
                    y: 0,
                }}
                transition={{
                    delay: 7,
                    duration: 1.2,
                }}
            >
                P.D. Este mini-proyectito todavía está
                <br />
                en desarrollo 💛
                <br />
                Dame un tiempecito...
                <br />
                después volverás y lo verás terminado :3
            </motion.p>

            {/* =====================================
          INDICIO DEL BOTÓN INICIO
          ===================================== */}

            <motion.span
                className="final-home-hint"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.32,
                }}
                transition={{
                    delay: 7,
                    duration: 1,
                }}
            >
                puedes volver cuando quieras
            </motion.span>

        </motion.div>
    );
}

export default FinalGarden;