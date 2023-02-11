export declare const QueryMode: {
    /**
     * Uses max-width media querying.
     * When the screen uses this mode. Views will only be accepted if the viewport is smaller than the defined values.
     */
    readonly DESKTOP_FIRST: "max-width";
    /**
     * Uses min-width media querying.
     * When the screen uses this mode. Views will only be accepted if the viewport is larger than the defined values.
     */
    readonly MOBILE_FIRST: "min-width";
};
export type QueryMode = typeof QueryMode[keyof typeof QueryMode];
