"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skip = void 0;
const filter_1 = require("./filter");
function skip(count) {
    return (0, filter_1.filter)((_, index) => count <= index);
}
exports.skip = skip;
//# sourceMappingURL=skip.js.map