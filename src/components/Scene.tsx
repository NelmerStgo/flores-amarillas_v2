import type { ReactNode } from "react";
import { motion } from "motion/react";

export type SceneTheme =
    | "neutral"
    | "night"
    | "dawn"
    | "day"
    | "sunset";

interface SceneProps {
    children: ReactNode;
    className?: string;
    theme?: SceneTheme;
}

function Scene({
    children,
    className = "",
    theme = "night",
}: SceneProps) {
    return (
        <motion.section
            className={`scene theme-${theme} ${className}`}
            initial={{
                opacity: 0,
                scale: 1.015,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.985,
            }}
            transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.section>
    );
}

export default Scene;