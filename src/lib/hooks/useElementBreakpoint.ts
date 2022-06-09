import * as React from "react";
import { BreakpointMapping } from "../resources/BreakpointMapping";

/**
 * Create a screen mapping to be used with the useScreen hook
 * @param self A reference to the object to check for width values
 * @param breakpoint A string starting with an int and ending with "px". The media query is based on: `(max-width: n)`
 * @param element The element mapped to the breakpoint
 * @returns Returns a BreakpointMapping
 */
export const useElementBreakpoint = (self: React.RefObject<HTMLElement>, breakpoint: string, element: JSX.Element): BreakpointMapping => {
    console.error("It is not recommended to use useElementBreakpoint in projects as it's behavior is unpredictable!");

    let isActive = false;

    const width = self?.current?.offsetWidth;

    if(width == undefined) return ({
        isActive,
        element
    } as BreakpointMapping)

    const breakpointAsNumber: number = parseInt(breakpoint.replace('px',''),10);
    

    if(breakpointAsNumber >= width) isActive = true;

    return ({
        isActive,
        element
    } as BreakpointMapping)
}