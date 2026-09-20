import { AnimatePresence, motion } from "motion/react";

interface CareDiscoveryProps {
  visible: boolean;

  level: number;
  complete: boolean;

  onWater: () => void;
}

const dropPositions = [
  {
    x: -55,
    y: 0,
  },
  {
    x: 60,
    y: 30,
  },
  {
    x: -10,
    y: 55,
  },
];

function CareDiscovery({
  visible,
  level,
  complete,
  onWater,
}: CareDiscoveryProps) {
  const currentPosition =
    dropPositions[
      Math.min(
        level,
        dropPositions.length - 1,
      )
    ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="care-discovery"
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
          {/* =================================
              GOTA
              ================================= */}

          {!complete && (
            <motion.button
              className="care-drop"
              onClick={onWater}
              aria-label="Regar"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,

                x: currentPosition.x,
                y: currentPosition.y,
              }}
              transition={{
                opacity: {
                  duration: 1.2,
                },

                scale: {
                  type: "spring",
                  stiffness: 110,
                  damping: 14,
                },

                x: {
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                },

                y: {
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              whileTap={{
                scale: 0.82,
              }}
            >
              <motion.span
                className="care-drop-glow"
                animate={{
                  opacity: [
                    0.12,
                    0.35,
                    0.12,
                  ],

                  scale: [
                    1,
                    1.18,
                    1,
                  ],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.span
                className="care-drop-shape"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          )}

          {/* =================================
              RESPUESTA AL RIEGO
              ================================= */}

          <AnimatePresence mode="popLayout">
            {level > 0 && (
              <motion.div
                key={`water-response-${level}`}
                className="care-water-response"
                initial={{
                  opacity: 0.55,
                  scale: 0.2,
                }}
                animate={{
                  opacity: 0,
                  scale: 4,
                }}
                transition={{
                  duration: 1.6,
                  ease: "easeOut",
                }}
              />
            )}
          </AnimatePresence>

          {/* =================================
              PEQUEÑOS BROTES
              ================================= */}

          <div className="care-growth">
            {level >= 1 && (
              <LittleSprout
                className="care-sprout--one"
              />
            )}

            {level >= 2 && (
              <LittleSprout
                className="care-sprout--two"
              />
            )}

            {level >= 3 && (
              <LittleSprout
                className="care-sprout--three"
              />
            )}
          </div>

          {/* =================================
              DESCUBRIMIENTO 03
              ================================= */}

          <AnimatePresence>
            {complete && (
              <motion.div
                className="care-copy"
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
                  duration: 1,
                }}
              >
                <motion.span
                  className="care-number"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 0.35,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                >
                  03 / ?
                </motion.span>

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.9,
                  }}
                >
                  Lo que la hizo crecer.
                </motion.h3>

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 0.6,
                  }}
                  transition={{
                    delay: 1.2,
                    duration: 0.9,
                  }}
                >
                  No fue de golpe.
                </motion.p>

                <motion.div
                  className="care-values"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.8,
                    duration: 1,
                  }}
                >
                  <span>tiempo</span>
                  <span>cuidado</span>
                  <span>constancia</span>
                </motion.div>

                <motion.p
                  className="care-final-line"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 0.78,
                  }}
                  transition={{
                    delay: 2.7,
                    duration: 1,
                  }}
                >
                  Las cosas bonitas también
                  necesitan que alguien decida
                  seguir cuidándolas.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface LittleSproutProps {
  className: string;
}

function LittleSprout({
  className,
}: LittleSproutProps) {
  return (
    <motion.div
      className={`care-sprout ${className}`}
      initial={{
        opacity: 0,
        scale: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 12,
      }}
    >
      <span className="care-sprout-stem" />
      <span className="care-sprout-leaf care-sprout-leaf--left" />
      <span className="care-sprout-leaf care-sprout-leaf--right" />
    </motion.div>
  );
}

export default CareDiscovery;