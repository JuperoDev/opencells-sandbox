"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const async_1 = require("../scheduler/async");
const delayWhen_1 = require("./delayWhen");
const timer_1 = require("../observable/timer");
function delay(due, scheduler = async_1.asyncScheduler) {
    const duration = (0, timer_1.timer)(due, scheduler);
    return (0, delayWhen_1.delayWhen)(() => duration);
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map