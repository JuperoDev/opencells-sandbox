"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportUnhandledError = void 0;
const config_1 = require("../config");
const timeoutProvider_1 = require("../scheduler/timeoutProvider");
function reportUnhandledError(err) {
    timeoutProvider_1.timeoutProvider.setTimeout(() => {
        const { onUnhandledError } = config_1.config;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
exports.reportUnhandledError = reportUnhandledError;
//# sourceMappingURL=reportUnhandledError.js.map