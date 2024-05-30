"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleArray = void 0;
const Observable_1 = require("../Observable");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable((subscriber) => {
        let i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
exports.scheduleArray = scheduleArray;
//# sourceMappingURL=scheduleArray.js.map