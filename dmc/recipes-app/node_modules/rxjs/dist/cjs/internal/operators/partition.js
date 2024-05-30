"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partition = void 0;
const not_1 = require("../util/not");
const filter_1 = require("./filter");
function partition(predicate, thisArg) {
    return (source) => [(0, filter_1.filter)(predicate, thisArg)(source), (0, filter_1.filter)((0, not_1.not)(predicate, thisArg))(source)];
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map