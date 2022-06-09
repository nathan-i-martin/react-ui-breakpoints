import * as React from "react";
import { BreakpointMapping } from "../resources/BreakpointMapping";
/**
 * Create a screen mapping to be used with the useScreen hook
 * @param self A reference to the object to check for width values
 * @param breakpoint A string starting with an int and ending with "px". The media query is based on: `(max-width: n)`
 * @param element The element mapped to the breakpoint
 * @returns Returns a BreakpointMapping
 */
export declare const useElementBreakpoint: (self: React.RefObject<HTMLElement>, breakpoint: string, element: JSX.Element) => BreakpointMapping;
