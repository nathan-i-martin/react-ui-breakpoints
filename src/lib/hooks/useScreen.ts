import { NoViewFoundError } from "../errors/NoViewFoundError.js";
import { BreakpointView } from "../resources/Breakpoint.js";
import { QueryMode } from "../resources/QueryMode.js";
import { checkMediaBreakpoint } from "./checkMediaBreakpoint.js";

/**
 * Returns a JSX Element based on the current screen size.
 * This function loops, in order from top to bottom, through all of the views that were provided and returns whichever one matches the query first.
 * If a view has it's breakpoint set to `default`, that view will not be returned until all over views have been tried. If no other views work, the default one will be returned.
 * 
 * You can set a default view, if all other breakpoints don't match the viewport, by setting a `useView(true, JSX.Element)` view at the end of the list.
 * 
 * # Usage - Mobile First
 * ```
 * return useScreen(
 *      QueryMode.MOBILE_FIRST // Place views in order from greatest to least.
 *      useView("1000px", JSX.Element),
 *      useView("500px", JSX.Element),
 *      useView("100px", JSX.Element),
 *      useView("default", JSX.Element),
 * );
 * ```
 * 
 * # Usage - Desktop First
 * ```
 * return useScreen(
 *      QueryMode.DESKTOP_FIRST // Place views in order from least to greatest.
 *      useView("100px", JSX.Element),
 *      useView("500px", JSX.Element),
 *      useView("1000px", JSX.Element),
 *      useView("default", JSX.Element),
 * );
 * ```
 * @param mode The QueryMode to use when deciding which view to show.
 * @param mappings Array of view mappings to compare against. Mappings are compared in the order they are provided.
 * @returns A JSX Element.
 * @throws NoViewFoundError If no views were matched.
 */
export const useScreen = (mode: QueryMode = QueryMode.MOBILE_FIRST, ...mappings: BreakpointView[]): JSX.Element => {
    try {
        let defaultBreakpoint: JSX.Element | null = null;

        for(const view of mappings) {
            if(view.breakpoint === "default")
                defaultBreakpoint = view.element;
            
            if(checkMediaBreakpoint(view.breakpoint,mode))
                return view.element;
        }

        if(defaultBreakpoint === null) throw new Error();

        return defaultBreakpoint;
    } catch(e) {}

    throw new NoViewFoundError();
}