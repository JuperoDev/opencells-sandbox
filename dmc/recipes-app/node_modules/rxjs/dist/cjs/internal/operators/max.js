"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = void 0;
const reduce_1 = require("./reduce");
const isFunction_1 = require("../util/isFunction");
function max(comparer) {
    return (0, reduce_1.reduce)((0, isFunction_1.isFunction)(comparer) ? (x, y) => (comparer(x, y) > 0 ? x : y) : (x, y) => (x > y ? x : y));
}
exports.max = max;
//# sourceMappingURL=max.js.map