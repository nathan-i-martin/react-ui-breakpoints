import { NoViewFoundError } from "../errors/NoViewFoundError.js";
import { BreakpointView } from "../resources/Breakpoint.js";
import { QueryMode } from "../resources/QueryMode.js";
import { useMediaBreakpoint } from "./useMediaBreakpoint.js";

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
export const useScreen = (mode: QueryMode = QueryMode.MOBILE_FIRST, ...mappings: BreakpointView[]): JSX.Element => {
    try {
        for(const view of mappings)
            if(view.breakpoint === true)
                return view.element;
            else if(useMediaBreakpoint(view.breakpoint,mode)) return view.element;
    } catch(e) {}
    throw new NoViewFoundError();
}