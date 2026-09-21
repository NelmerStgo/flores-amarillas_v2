import { motion } from "motion/react";

import juntosGatos from "../../assets/memories/pareja.jpg";

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
                duration: 1.2,
            }}
        >
            <motion.div
                className="meaning-light"
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.6,
                }}
            />

            <div className="meaning-copy">
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 0.72,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.35,
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
                        delay: 0.95,
                        duration: 0.9,
                    }}
                >
                    entendí que podía confiar
                    <br />
                    en ti.
                </motion.h3>

                <motion.div
                    className="meaning-memory"
                    initial={{
                        opacity: 0,
                        scale: 0.88,
                        rotate: -2,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        delay: 1.8,
                        duration: 1,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
                    }}
                >
                    <img
                        src={juntosGatos}
                        alt=""
                        className="meaning-memory-image"
                        draggable={false}
                    />

                    <span className="meaning-memory-name">
                        LISS.
                    </span>
                </motion.div>

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
                        delay: 2.9,
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