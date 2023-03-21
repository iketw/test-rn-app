"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDeprecationWarning = void 0;
var warnSet = new Set();
function showDeprecationWarning(deprecated, replacement) {
    // deprecation warnings only in dev only in dev
    if (__DEV__) {
        if (warnSet.has("".concat(deprecated, ":").concat(replacement))) {
            return;
        }
        warnSet.add("".concat(deprecated, ":").concat(replacement));
        console.warn("`".concat(deprecated, "` is deprecated and will be removed in a future major version. Please use `").concat(replacement, "` instead."));
    }
}
exports.showDeprecationWarning = showDeprecationWarning;
