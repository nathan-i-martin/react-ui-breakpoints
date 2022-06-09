/// <reference types="react" />
import { BreakpointMapping } from "../resources/BreakpointMapping";
/**
 * Create a screen breakpoint mapping to be used with the useScreen hook
 * @param mediaBreakpoint A string starting with an int and ending with "px". The media query is based on: `(max-width: n)`
 * @param element The element mapped to the breakpoint
 * @returns Returns a BreakpointMapping
 */
export declare const useScreenBreakpoint: (breakpoint: string, element: JSX.Element) => BreakpointMapping;
