"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const reduce_1 = require("./reduce");
function count(predicate) {
    return (0, reduce_1.reduce)((total, value, i) => (!predicate || predicate(value, i) ? total + 1 : total), 0);
}
exports.count = count;
//# sourceMappingURL=count.js.map