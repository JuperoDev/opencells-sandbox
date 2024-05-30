"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
const EmptyError_1 = require("../util/EmptyError");
const filter_1 = require("./filter");
const takeLast_1 = require("./takeLast");
const throwIfEmpty_1 = require("./throwIfEmpty");
const defaultIfEmpty_1 = require("./defaultIfEmpty");
const identity_1 = require("../util/identity");
function last(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? (0, filter_1.filter)((v, i) => predicate(v, i, source)) : identity_1.identity, (0, takeLast_1.takeLast)(1), hasDefaultValue ? (0, defaultIfEmpty_1.defaultIfEmpty)(defaultValue) : (0, throwIfEmpty_1.throwIfEmpty)(() => new EmptyError_1.EmptyError()));
}
exports.last = last;
//# sourceMappingURL=last.js.map