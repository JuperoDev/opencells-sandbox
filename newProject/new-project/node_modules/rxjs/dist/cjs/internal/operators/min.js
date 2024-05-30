"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = void 0;
const reduce_1 = require("./reduce");
const isFunction_1 = require("../util/isFunction");
function min(comparer) {
    return (0, reduce_1.reduce)((0, isFunction_1.isFunction)(comparer) ? (x, y) => (comparer(x, y) < 0 ? x : y) : (x, y) => (x < y ? x : y));
}
exports.min = min;
//# sourceMappingURL=min.js.map