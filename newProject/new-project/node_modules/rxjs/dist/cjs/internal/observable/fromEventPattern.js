"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEventPattern = void 0;
const Observable_1 = require("../Observable");
const isFunction_1 = require("../util/isFunction");
const mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe((0, mapOneOrManyArgs_1.mapOneOrManyArgs)(resultSelector));
    }
    return new Observable_1.Observable((subscriber) => {
        const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
        const retValue = addHandler(handler);
        return (0, isFunction_1.isFunction)(removeHandler) ? () => removeHandler(handler, retValue) : undefined;
    });
}
exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map