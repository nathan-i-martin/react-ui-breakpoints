import { ScreenDimensions } from "../resources/ScreenDimensions.js";
/**
 * Hook into the screen and get it's dimensions.
 * Any time the screen size changes this hook will fire.
 * @returns The new dimensions.
 */
export declare const useHookOntoScreen: () => ScreenDimensions;
