import { useState } from "react";
import { AnimatePresence } from "motion/react";

import IntroScene from "./scenes/IntroScene";
import JourneyScene from "./scenes/JourneyScene";
import GardenScene from "./scenes/GardenScene";
import BackgroundMusic from "./components/BackgroundMusic";

type Scene = "intro" | "journey" | "garden";

function App() {
    const [currentScene, setCurrentScene] = useState<Scene>("intro");

    return (
        <main className="app">

            <BackgroundMusic />
            
            <AnimatePresence mode="wait">
                {currentScene === "intro" && (
                    <IntroScene
                        key="intro"
                        onContinue={() => setCurrentScene("journey")}
                    />
                )}

                {currentScene === "journey" && (
                    <JourneyScene
                        key="journey"
                        onBack={() => setCurrentScene("intro")}
                        onContinue={() => setCurrentScene("garden")}
                    />
                )}

                {currentScene === "garden" && (
                    <GardenScene
                        key="garden"
                        onBack={() =>
                            setCurrentScene("journey")
                        }
                        onHome={() =>
                            setCurrentScene("intro")
                        }
                    />
                )}
            </AnimatePresence>
        </main>
    );
}

export default App;