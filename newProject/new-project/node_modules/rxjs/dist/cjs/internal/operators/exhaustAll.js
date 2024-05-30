"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exhaustAll = void 0;
const exhaustMap_1 = require("./exhaustMap");
const identity_1 = require("../util/identity");
function exhaustAll() {
    return (0, exhaustMap_1.exhaustMap)(identity_1.identity);
}
exports.exhaustAll = exhaustAll;
//# sourceMappingURL=exhaustAll.js.map