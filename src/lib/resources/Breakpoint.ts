export type Breakpoint = `${string}px` | true;

export type BreakpointView = {
    breakpoint: Breakpoint;
    element: JSX.Element;
}