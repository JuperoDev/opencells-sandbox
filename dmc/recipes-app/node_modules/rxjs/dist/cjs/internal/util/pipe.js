"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipeFromArray = exports.pipe = void 0;
const identity_1 = require("./identity");
function pipe(...fns) {
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map