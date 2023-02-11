import { Breakpoint, BreakpointView } from "../resources/Breakpoint.js";

/**
 * Create a screen breakpoint mapping to be used with the useScreen hook
 * @param mediaBreakpoint A string starting with an int and ending with "px". Set to `undefined` to set this view to automatically show no-matter what, once it's reached in useScreen.
 * @param element The element mapped to the breakpoint
 * @returns Returns a BreakpointMapping
 */
export const useView = (breakpoint: Breakpoint, element: JSX.Element): BreakpointView => ({
    breakpoint: breakpoint,
    element: element
} as BreakpointView)