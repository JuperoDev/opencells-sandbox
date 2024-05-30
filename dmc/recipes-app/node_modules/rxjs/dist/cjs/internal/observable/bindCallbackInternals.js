"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindCallbackInternals = void 0;
const isScheduler_1 = require("../util/isScheduler");
const Observable_1 = require("../Observable");
const subscribeOn_1 = require("../operators/subscribeOn");
const mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
const observeOn_1 = require("../operators/observeOn");
const AsyncSubject_1 = require("../AsyncSubject");
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if ((0, isScheduler_1.isScheduler)(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function (...args) {
                return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler)
                    .apply(this, args)
                    .pipe((0, mapOneOrManyArgs_1.mapOneOrManyArgs)(resultSelector));
            };
        }
    }
    if (scheduler) {
        return function (...args) {
            return bindCallbackInternals(isNodeStyle, callbackFunc)
                .apply(this, args)
                .pipe((0, subscribeOn_1.subscribeOn)(scheduler), (0, observeOn_1.observeOn)(scheduler));
        };
    }
    return function (...args) {
        const subject = new AsyncSubject_1.AsyncSubject();
        let uninitialized = true;
        return new Observable_1.Observable((subscriber) => {
            const subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                let isAsync = false;
                let isComplete = false;
                callbackFunc.apply(this, [
                    ...args,
                    (...results) => {
                        if (isNodeStyle) {
                            const err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete = true;
                        if (isAsync) {
                            subject.complete();
                        }
                    },
                ]);
                if (isComplete) {
                    subject.complete();
                }
                isAsync = true;
            }
            return subs;
        });
    };
}
exports.bindCallbackInternals = bindCallbackInternals;
//# sourceMappingURL=bindCallbackInternals.js.map