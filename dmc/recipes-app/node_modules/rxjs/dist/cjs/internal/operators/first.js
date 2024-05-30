"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
const EmptyError_1 = require("../util/EmptyError");
const filter_1 = require("./filter");
const take_1 = require("./take");
const defaultIfEmpty_1 = require("./defaultIfEmpty");
const throwIfEmpty_1 = require("./throwIfEmpty");
const identity_1 = require("../util/identity");
function first(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? (0, filter_1.filter)((v, i) => predicate(v, i, source)) : identity_1.identity, (0, take_1.take)(1), hasDefaultValue ? (0, defaultIfEmpty_1.defaultIfEmpty)(defaultValue) : (0, throwIfEmpty_1.throwIfEmpty)(() => new EmptyError_1.EmptyError()));
}
exports.first = first;
//# sourceMappingURL=first.js.map