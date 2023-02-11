import { ScreenDimensions } from "../resources/ScreenDimensions.js"
import { useState, useEffect, useCallback } from 'react';

/**
 * Hook into the screen and get it's dimensions.
 * Any time the screen size changes this hook will fire.
 * @returns The new dimensions.
 */
export const useHookOntoScreen = () => {
    const [ dimensions, setDimensions ]: [ ScreenDimensions, Function ] = useState({ height: window.innerHeight, width: window.innerWidth });
    const handleSetDimensions = useCallback(() => setDimensions({ height: window.innerHeight, width: window.innerWidth }),[]);
    useEffect(() => {
        addEventListener("resize", handleSetDimensions);
        return () => {
            removeEventListener("resize", handleSetDimensions);
        }
    },[handleSetDimensions]);
    return dimensions;
}