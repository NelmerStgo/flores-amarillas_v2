import { useCallback, useEffect, useRef, useState } from "react";

export interface LightPosition {
    x: number;
    y: number;
}

const LIGHT_POSITIONS: LightPosition[] = [
    { x: 0, y: 0 },
    { x: 75, y: -35 },
    { x: -65, y: -75 },
    { x: 20, y: -125 },
];

export function useGardenJourney() {
    const [isHolding, setIsHolding] = useState(false);
    const [hasGrown, setHasGrown] = useState(false);

    const [mysteryAppeared, setMysteryAppeared] =
        useState(false);

    const [lightStep, setLightStep] = useState(0);

    const [
        lightJourneyComplete,
        setLightJourneyComplete,
    ] = useState(false);

    const [
        environmentRevealed,
        setEnvironmentRevealed,
    ] = useState(false);

    const [
        environmentIntroDone,
        setEnvironmentIntroDone,
    ] = useState(false);

    const [
        firstFlowerOpen,
        setFirstFlowerOpen,
    ] = useState(false);

    const [
        distantSignalVisible,
        setDistantSignalVisible,
    ] = useState(false);

    const [
        rootsDiscoveryOpen,
        setRootsDiscoveryOpen,
    ] = useState(false);

    const [
        rootsNarrationDone,
        setRootsNarrationDone,
    ] = useState(false);

    const [careLevel, setCareLevel] =
        useState(0);

    const [
        careDiscoveryComplete,
        setCareDiscoveryComplete,
    ] = useState(false);

    const [
        memoriesVisible,
        setMemoriesVisible,
    ] = useState(false);

    const [
        memoriesComplete,
        setMemoriesComplete,
    ] = useState(false);

    const [
        meaningOpen,
        setMeaningOpen,
    ] = useState(false);

    const [
        finalGardenVisible,
        setFinalGardenVisible,
    ] = useState(false);
    /*
 * Terminamos de contar cómo empezó →
 * aparece la siguiente oportunidad
 * de interactuar con el jardín.
 */
    useEffect(() => {
        if (!rootsDiscoveryOpen) return;

        const timer = window.setTimeout(() => {
            setRootsNarrationDone(true);
        }, 3800);

        return () => {
            window.clearTimeout(timer);
        };
    }, [rootsDiscoveryOpen]);

    const holdTimer =
        useRef<number | null>(null);

    /*
     * Brote → aparece la luz.
     */
    useEffect(() => {
        if (!hasGrown) return;

        const timer = window.setTimeout(() => {
            setMysteryAppeared(true);
        }, 3200);

        return () => {
            window.clearTimeout(timer);
        };
    }, [hasGrown]);

    /*
     * Terminamos de seguir la luz →
     * entramos al jardín.
     */
    useEffect(() => {
        if (!lightJourneyComplete) return;

        const timer = window.setTimeout(() => {
            setEnvironmentRevealed(true);
        }, 3200);

        return () => {
            window.clearTimeout(timer);
        };
    }, [lightJourneyComplete]);

    /*
     * Entrada al jardín →
     * termina el texto introductorio.
     */
    useEffect(() => {
        if (!environmentRevealed) return;

        const timer = window.setTimeout(() => {
            setEnvironmentIntroDone(true);
        }, 3800);

        return () => {
            window.clearTimeout(timer);
        };
    }, [environmentRevealed]);

    /*
     * Primera flor →
     * el jardín responde.
     */
    useEffect(() => {
        if (!firstFlowerOpen) return;

        const timer = window.setTimeout(() => {
            setDistantSignalVisible(true);
        }, 1800);

        return () => {
            window.clearTimeout(timer);
        };
    }, [firstFlowerOpen]);

    /*
     * Limpieza adicional por si abandonamos
     * la escena mientras se mantiene pulsado.
     */
    useEffect(() => {
        return () => {
            if (holdTimer.current) {
                window.clearTimeout(holdTimer.current);
            }
        };
    }, []);

    /*
 * Termina la etapa de crecimiento →
 * aparecen los primeros recuerdos.
 */
    useEffect(() => {
        if (!careDiscoveryComplete) return;

        const timer = window.setTimeout(() => {
            setMemoriesVisible(true);
        }, 3200);

        return () => {
            window.clearTimeout(timer);
        };
    }, [careDiscoveryComplete]);

    const completeMemories = useCallback(() => {
        setMemoriesComplete(true);
    }, []);

    const startHolding = () => {
        if (hasGrown) return;

        setIsHolding(true);

        holdTimer.current = window.setTimeout(() => {
            setHasGrown(true);
            setIsHolding(false);

            holdTimer.current = null;
        }, 1500);
    };

    const stopHolding = () => {
        if (holdTimer.current) {
            window.clearTimeout(holdTimer.current);
            holdTimer.current = null;
        }

        setIsHolding(false);
    };

    const followLight = () => {
        if (lightJourneyComplete) return;

        if (
            lightStep <
            LIGHT_POSITIONS.length - 1
        ) {
            setLightStep(
                (currentStep) => currentStep + 1,
            );

            return;
        }

        setLightJourneyComplete(true);
    };

    const openFirstFlower = () => {
        if (firstFlowerOpen) return;

        setFirstFlowerOpen(true);
    };

    const openRootsDiscovery = () => {
        if (
            !distantSignalVisible ||
            rootsDiscoveryOpen
        ) {
            return;
        }

        setRootsDiscoveryOpen(true);
    };

    const waterGarden = () => {
        if (
            !rootsNarrationDone ||
            careDiscoveryComplete
        ) {
            return;
        }

        setCareLevel((currentLevel) => {
            const nextLevel = Math.min(
                currentLevel + 1,
                3,
            );

            if (nextLevel === 3) {
                setCareDiscoveryComplete(true);
            }

            return nextLevel;
        });
    };

    const openMeaning = () => {
        if (
            !memoriesComplete ||
            meaningOpen
        ) {
            return;
        }

        setMeaningOpen(true);
    };

    /*
 * Momento personal →
 * transición al jardín final.
 */
    useEffect(() => {
        if (!meaningOpen) return;

        const timer = window.setTimeout(() => {
            setFinalGardenVisible(true);
        }, 8000);

        return () => {
            window.clearTimeout(timer);
        };
    }, [meaningOpen]);

    return {
        isHolding,
        hasGrown,

        mysteryAppeared,

        lightStep,
        lightPositions: LIGHT_POSITIONS,
        lightJourneyComplete,

        environmentRevealed,
        environmentIntroDone,

        firstFlowerOpen,
        distantSignalVisible,

        rootsDiscoveryOpen,

        startHolding,
        stopHolding,
        followLight,
        openFirstFlower,
        openRootsDiscovery,

        rootsNarrationDone,

        careLevel,
        careDiscoveryComplete,

        waterGarden,

        memoriesVisible,
        memoriesComplete,
        completeMemories,

        meaningOpen,
        finalGardenVisible,

        openMeaning,
    };
}