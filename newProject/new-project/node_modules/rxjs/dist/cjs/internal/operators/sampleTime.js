"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleTime = void 0;
const async_1 = require("../scheduler/async");
const sample_1 = require("./sample");
const interval_1 = require("../observable/interval");
function sampleTime(period, scheduler = async_1.asyncScheduler) {
    return (0, sample_1.sample)((0, interval_1.interval)(period, scheduler));
}
exports.sampleTime = sampleTime;
//# sourceMappingURL=sampleTime.js.map