"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSubscribable = void 0;
const Observable_1 = require("../Observable");
function fromSubscribable(subscribable) {
    return new Observable_1.Observable((subscriber) => subscribable.subscribe(subscriber));
}
exports.fromSubscribable = fromSubscribable;
//# sourceMappingURL=fromSubscribable.js.map