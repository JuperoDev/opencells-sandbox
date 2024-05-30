"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAll = void 0;
const mergeMap_1 = require("./mergeMap");
const identity_1 = require("../util/identity");
function mergeAll(concurrent = Infinity) {
    return (0, mergeMap_1.mergeMap)(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map