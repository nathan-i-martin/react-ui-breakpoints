/// <reference types="react" />
export type Breakpoint = `${string}px` | "default";
export type BreakpointView = {
    breakpoint: Breakpoint;
    element: JSX.Element;
};
