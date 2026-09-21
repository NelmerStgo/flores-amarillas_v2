import { motion } from "motion/react";

function MeaningDiscovery() {
    return (
        <motion.div
            className="meaning-discovery"
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
                duration: 1.4,
            }}
        >
            <motion.div
                className="meaning-light"
                initial={{
                    opacity: 0,
                    scale: 0.4,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.8,
                }}
            />

            <div className="meaning-copy">
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 0.55,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                    }}
                >
                    Y entre todos esos momentos...
                </motion.p>

                <motion.h3
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 1.25,
                        duration: 1,
                    }}
                >
                    entendí que podía confiar
                    <br />
                    en ti.
                </motion.h3>

                <motion.strong
                    className="meaning-name"
                    initial={{
                        opacity: 0,
                        scale: 0.92,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        delay: 2.7,
                        duration: 1,
                    }}
                >
                    LISS.
                </motion.strong>

                <motion.div
                    className="meaning-continuation"
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 3.7,
                        duration: 1,
                    }}
                >
                    <span>♡</span>

                    <p>
                        Y creo que eso es
                        <br />
                        lo bonito de todo esto.
                    </p>

                    <strong>
                        Todavía nos quedan
                        <br />
                        muchas cosas por vivir.
                    </strong>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default MeaningDiscovery;