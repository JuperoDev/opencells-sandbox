"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval = void 0;
const async_1 = require("../scheduler/async");
const timer_1 = require("./timer");
function interval(period = 0, scheduler = async_1.asyncScheduler) {
    if (period < 0) {
        period = 0;
    }
    return (0, timer_1.timer)(period, period, scheduler);
}
exports.interval = interval;
//# sourceMappingURL=interval.js.map