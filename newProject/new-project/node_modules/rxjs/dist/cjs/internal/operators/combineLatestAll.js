"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestAll = void 0;
const combineLatest_1 = require("../observable/combineLatest");
const joinAllInternals_1 = require("./joinAllInternals");
function combineLatestAll(project) {
    return (0, joinAllInternals_1.joinAllInternals)(combineLatest_1.combineLatest, project);
}
exports.combineLatestAll = combineLatestAll;
//# sourceMappingURL=combineLatestAll.js.map