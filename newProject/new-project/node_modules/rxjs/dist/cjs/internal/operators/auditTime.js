"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditTime = void 0;
const async_1 = require("../scheduler/async");
const audit_1 = require("./audit");
const timer_1 = require("../observable/timer");
function auditTime(duration, scheduler = async_1.asyncScheduler) {
    return (0, audit_1.audit)(() => (0, timer_1.timer)(duration, scheduler));
}
exports.auditTime = auditTime;
//# sourceMappingURL=auditTime.js.map