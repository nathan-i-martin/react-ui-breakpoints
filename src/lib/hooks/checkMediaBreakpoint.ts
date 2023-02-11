import { QueryMode } from '../resources/QueryMode.js';

/**
 * Check if a media query is valid.
 * @param query A string containing any positive integer followed by 'px'.
 * @param mode The QueryMode to use when searching. Defaults to min-width.
 * @returns A boolean. `true` if the current screen width matches the query. `false` if the current screen width does not match the query.
 */
export const checkMediaBreakpoint = (query: string, mode: QueryMode = QueryMode.MOBILE_FIRST): boolean => window.matchMedia(`(${mode}: ${query})`).matches;