Object.defineProperty(exports, '__esModule', { value: true });

var reactResponsive = require('react-responsive');

/**
 * Returns a JSX Element based on the current screen size.
 * @param defaultMapping JSX Element to return is no matches are made.
 * @param mappings Array of screen mappings to compare against. Mappings are compared in order they are provided.
 * @returns A JSX Element.
 */
var useScreen = function (defaultMapping) {
    var mappings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        mappings[_i - 1] = arguments[_i];
    }
    var finalOutput = defaultMapping;
    if (!mappings)
        return finalOutput;
    if (mappings.length < 1)
        return finalOutput;
    mappings.forEach(function (mapping) {
        if (mapping.isActive)
            finalOutput = mapping.element;
    });
    return finalOutput;
};

/**
 * Check is a media query is valid.
 * @param query A string containing any integer followed by 'px'.
 * @returns A boolean. `true` if the current screen width matches the query. `false` if the current screen width does not match the query.
 */
var useMediaBreakpoint = function (query) { return reactResponsive.useMediaQuery({ 'query': "(max-width: ".concat(query, ")") }); };

/**
 * Create a screen breakpoint mapping to be used with the useScreen hook
 * @param mediaBreakpoint A string starting with an int and ending with "px". The media query is based on: `(max-width: n)`
 * @param element The element mapped to the breakpoint
 * @returns Returns a BreakpointMapping
 */
var useScreenBreakpoint = function (breakpoint, element) { return ({
    isActive: useMediaBreakpoint(breakpoint),
    element: element
}); };

/**
 * Create a screen mapping to be used with the useScreen hook
 * @param self A reference to the object to check for width values
 * @param breakpoint A string starting with an int and ending with "px". The media query is based on: `(max-width: n)`
 * @param element The element mapped to the breakpoint
 * @returns Returns a BreakpointMapping
 */
var useElementBreakpoint = function (self, breakpoint, element) {
    var _a;
    console.error("It is not recommended to use useElementBreakpoint in projects as it's behavior is unpredictable!");
    var isActive = false;
    var width = (_a = self === null || self === void 0 ? void 0 : self.current) === null || _a === void 0 ? void 0 : _a.offsetWidth;
    if (width == undefined)
        return {
            isActive: isActive,
            element: element
        };
    var breakpointAsNumber = parseInt(breakpoint.replace('px', ''), 10);
    if (breakpointAsNumber >= width)
        isActive = true;
    return {
        isActive: isActive,
        element: element
    };
};

exports.useElementBreakpoint = useElementBreakpoint;
exports.useMediaBreakpoint = useMediaBreakpoint;
exports.useScreen = useScreen;
exports.useScreenBreakpoint = useScreenBreakpoint;
//# sourceMappingURL=index.js.map
