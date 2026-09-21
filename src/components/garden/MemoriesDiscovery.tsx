import {
    useEffect,
    useState,
} from "react";

import {
    AnimatePresence,
    motion,
} from "motion/react";

import MemoryConstellation from "./MemoryConstellation";

import holaGato from "../../assets/memes/gato-cute.jpg";
import juntosIlustracion from "../../assets/memories/juntos-ilustracion.jpg";
import juntosGatos from "../../assets/memories/juntos-gatos.jpg";

const memories = [
    {
        id: "hello",
        className: "memory-point--one",
        image: holaGato,
        eyebrow: "creo que todo empezó por algo así...",
        title: "Quívole 🖖👽",
        text:
            "La verdad, ninguno de los dos tenía idea de hasta dónde iba a llegar ese saludo.",
        tone: "fun",
    },

    {
        id: "together",
        className: "memory-point--two",
        image: juntosIlustracion,
        eyebrow: "y poco a poco",
        title: "Empecé a sentir que alguien me entendía.",
        text:
            "Todo se sentía tranquilo, abierto... como si pudiéramos ser nosotros mismos sin tener que explicar demasiado. 👀",
        tone: "warm",
    },

    {
        id: "liss",
        className: "memory-point--three",
        image: juntosGatos,
        eyebrow:
            "Y al final, poco a poco, nos dimos cuenta de lo que estaba pasando...",
        title: "Era mutuo :3",
        text:
            "Y creo que ahí fue cuando todo empezó a tomar un rumbo distinto... pero de los bonitos.",
        tone: "emotional",
    },
] as const;

type MemoryId =
    (typeof memories)[number]["id"];

interface MemoriesDiscoveryProps {
    visible: boolean;
    complete: boolean;

    meaningOpen: boolean;

    onComplete: () => void;
    onOpenMeaning: () => void;
}

function MemoriesDiscovery({
    visible,
    complete,
    meaningOpen,
    onComplete,
    onOpenMeaning,
}: MemoriesDiscoveryProps) {
    const [found, setFound] =
        useState<MemoryId[]>([]);

    const [
        activeMemory,
        setActiveMemory,
    ] =
        useState<MemoryId | null>(
            null,
        );

    useEffect(() => {
        if (
            found.length !==
            memories.length ||
            complete
        ) {
            return;
        }

        const timer =
            window.setTimeout(() => {
                onComplete();
            }, 900);

        return () => {
            window.clearTimeout(timer);
        };
    }, [
        found.length,
        complete,
        onComplete,
    ]);

    if (!visible) {
        return null;
    }

    const currentMemory =
        memories.find(
            (memory) =>
                memory.id ===
                activeMemory,
        ) ?? null;

    const discoverMemory = (
        id: MemoryId,
    ) => {
        setActiveMemory(id);

        setFound((current) => {
            if (
                current.includes(id)
            ) {
                return current;
            }

            return [
                ...current,
                id,
            ];
        });
    };

    const closeMemory = () => {
        setActiveMemory(null);
    };

    return (
        <motion.div
            className="memories-discovery"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
        >
            {/* Puntos dentro del jardín */}

            {!complete &&
                memories.map(
                    (
                        memory,
                        index,
                    ) => {
                        const discovered =
                            found.includes(
                                memory.id,
                            );

                        return (
                            <motion.button
                                key={
                                    memory.id
                                }
                                className={`memory-point ${memory.className
                                    } ${discovered
                                        ? "memory-point--found"
                                        : ""
                                    }`}
                                onClick={() =>
                                    discoverMemory(
                                        memory.id,
                                    )
                                }
                                aria-label="Descubrir recuerdo"
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    delay:
                                        0.4 +
                                        index *
                                        0.3,

                                    type: "spring",
                                    stiffness: 90,
                                    damping: 12,
                                }}
                                whileTap={{
                                    scale: 0.82,
                                }}
                            >
                                <motion.span
                                    className="memory-point-glow"
                                    animate={{
                                        opacity:
                                            discovered
                                                ? 0.1
                                                : [
                                                    0.12,
                                                    0.4,
                                                    0.12,
                                                ],

                                        scale:
                                            discovered
                                                ? 1
                                                : [
                                                    0.9,
                                                    1.3,
                                                    0.9,
                                                ],
                                    }}
                                    transition={{
                                        duration: 2.7,

                                        repeat:
                                            discovered
                                                ? 0
                                                : Infinity,
                                    }}
                                />

                                <span className="memory-point-core">
                                    {discovered
                                        ? "🌼"
                                        : "✦"}
                                </span>
                            </motion.button>
                        );
                    },
                )}

            {/* Recuerdo abierto */}

            <AnimatePresence>
                {currentMemory && (
                    <motion.div
                        className="memory-overlay"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={
                            closeMemory
                        }
                    >
                        <motion.article
                            className={`memory-card memory-card--${currentMemory.tone}`}
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.94,
                                y: 15,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                            onClick={(
                                event,
                            ) =>
                                event.stopPropagation()
                            }
                        >
                            <div className="memory-image-wrapper">
                                <img
                                    src={
                                        currentMemory.image
                                    }
                                    alt=""
                                    className="memory-image"
                                />
                            </div>

                            <div className="memory-card-content">
                                <span className="memory-eyebrow">
                                    {
                                        currentMemory.eyebrow
                                    }
                                </span>

                                <h3>
                                    {
                                        currentMemory.title
                                    }
                                </h3>

                                <p>
                                    {
                                        currentMemory.text
                                    }
                                </p>
                            </div>

                            <button
                                className="memory-close"
                                onClick={
                                    closeMemory
                                }
                                aria-label="Cerrar recuerdo"
                            >
                                ×
                            </button>
                        </motion.article>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cuando encuentra los tres */}

            <AnimatePresence>
                {complete &&
                    !currentMemory &&
                    !meaningOpen && (
                        <MemoryConstellation
                            onOpen={
                                onOpenMeaning
                            }
                        />
                    )}
            </AnimatePresence>
        </motion.div>
    );
}

export default MemoriesDiscovery;