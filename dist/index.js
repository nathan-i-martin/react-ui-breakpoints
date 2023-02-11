import { useMediaQuery } from 'react-responsive';

class NoViewFoundError extends Error {
    constructor(message = "No view could be found matching the current screen viewport!") {
        super(message);
        this.name = "NoViewFoundError";
    }
}

const QueryMode = {
    /**
     * Uses max-width media querying.
     * When the screen uses this mode. Views will only be accepted if the viewport is smaller than the defined values.
     */
    DESKTOP_FIRST: "max-width",
    /**
     * Uses min-width media querying.
     * When the screen uses this mode. Views will only be accepted if the viewport is larger than the defined values.
     */
    MOBILE_FIRST: "min-width",
};

/**
 * Check if a media query is valid.
 * @param query A string containing any positive integer followed by 'px'.
 * @param mode The QueryMode to use when searching. Defaults to min-width.
 * @returns A boolean. `true` if the current screen width matches the query. `false` if the current screen width does not match the query.
 */
const useMediaBreakpoint = (query, mode = QueryMode.MOBILE_FIRST) => useMediaQuery({ 'query': `(${mode}: ${query})` });

/**
 * Returns a JSX Element based on the current screen size.
 * This function loops, in order from top to bottom, through all of the views that were provided and returns whichever one matches the query first.
 * If a view has it's breakpoint set to `true`, that view will always be returned once it's reached in the loop.
 *
 * You can set a default view, if all other breakpoints don't match the viewport, by setting a `useView(true, JSX.Element)` view at the end of the list.
 *
 * # Usage
 * ```
 * return useScreen(
 *      useView("100px", JSX.Element),
 *      useView("500px", JSX.Element),
 *      useView("1000px", JSX.Element),
 *      useView(true, JSX.Element), // This view will be returned if any of the others don't
 * );
 * ```
 * @param mode The QueryMode to use when deciding which view to show.
 * @param mappings Array of view mappings to compare against. Mappings are compared in the order they are provided.
 * @returns A JSX Element.
 * @throws NoViewFoundError If no views were matched.
 */
const useScreen = (mode = QueryMode.MOBILE_FIRST, ...mappings) => {
    try {
        for (const view of mappings)
            if (view.breakpoint === true)
                return view.element;
            else if (useMediaBreakpoint(view.breakpoint, mode))
                return view.element;
    }
    catch (e) { }
    throw new NoViewFoundError();
};

/**
 * Create a screen breakpoint mapping to be used with the useScreen hook
 * @param mediaBreakpoint A string starting with an int and ending with "px". Set to `undefined` to set this view to automatically show no-matter what, once it's reached in useScreen.
 * @param element The element mapped to the breakpoint
 * @returns Returns a BreakpointMapping
 */
const useView = (breakpoint, element) => ({
    breakpoint: breakpoint,
    element: element
});

export { QueryMode, useScreen, useView };
//# sourceMappingURL=index.js.map
