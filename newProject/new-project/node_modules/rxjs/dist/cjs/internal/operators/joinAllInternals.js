"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinAllInternals = void 0;
const identity_1 = require("../util/identity");
const mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
const pipe_1 = require("../util/pipe");
const mergeMap_1 = require("./mergeMap");
const toArray_1 = require("./toArray");
function joinAllInternals(joinFn, project) {
    return (0, pipe_1.pipe)((0, toArray_1.toArray)(), (0, mergeMap_1.mergeMap)((sources) => joinFn(sources)), project ? (0, mapOneOrManyArgs_1.mapOneOrManyArgs)(project) : identity_1.identity);
}
exports.joinAllInternals = joinAllInternals;
//# sourceMappingURL=joinAllInternals.js.map