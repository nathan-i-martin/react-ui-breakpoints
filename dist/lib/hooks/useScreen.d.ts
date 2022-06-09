/// <reference types="react" />
import { BreakpointMapping } from "../resources/BreakpointMapping";
/**
 * Returns a JSX Element based on the current screen size.
 * @param defaultMapping JSX Element to return is no matches are made.
 * @param mappings Array of screen mappings to compare against. Mappings are compared in order they are provided.
 * @returns A JSX Element.
 */
export declare const useScreen: (defaultMapping: JSX.Element, ...mappings: BreakpointMapping[]) => JSX.Element;
