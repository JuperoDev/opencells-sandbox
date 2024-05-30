"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
const Subscription_1 = require("../Subscription");
class Action extends Subscription_1.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
exports.Action = Action;
//# sourceMappingURL=Action.js.map