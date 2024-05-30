"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const identity_1 = require("../util/identity");
const isScheduler_1 = require("../util/isScheduler");
const defer_1 = require("./defer");
const scheduleIterable_1 = require("../scheduled/scheduleIterable");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    let resultSelector;
    let initialState;
    if (arguments.length === 1) {
        ({
            initialState,
            condition,
            iterate,
            resultSelector = identity_1.identity,
            scheduler,
        } = initialStateOrOptions);
    }
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || (0, isScheduler_1.isScheduler)(resultSelectorOrScheduler)) {
            resultSelector = identity_1.identity;
            scheduler = resultSelectorOrScheduler;
        }
        else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function* gen() {
        for (let state = initialState; !condition || condition(state); state = iterate(state)) {
            yield resultSelector(state);
        }
    }
    return (0, defer_1.defer)((scheduler
        ?
            () => (0, scheduleIterable_1.scheduleIterable)(gen(), scheduler)
        :
            gen));
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map