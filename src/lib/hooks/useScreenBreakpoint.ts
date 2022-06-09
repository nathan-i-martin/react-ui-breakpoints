import { BreakpointMapping } from "../resources/BreakpointMapping";
import { useMediaBreakpoint } from "./useMediaBreakpoint";
/**
 * Create a screen breakpoint mapping to be used with the useScreen hook
 * @param mediaBreakpoint A string starting with an int and ending with "px". The media query is based on: `(max-width: n)`
 * @param element The element mapped to the breakpoint
 * @returns Returns a BreakpointMapping
 */
export const useScreenBreakpoint = (breakpoint: string, element: JSX.Element): BreakpointMapping => ({
    isActive: useMediaBreakpoint(breakpoint),
    element: element
} as BreakpointMapping)