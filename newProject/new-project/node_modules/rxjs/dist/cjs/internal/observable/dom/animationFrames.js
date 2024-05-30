"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationFrames = void 0;
const Observable_1 = require("../../Observable");
const performanceTimestampProvider_1 = require("../../scheduler/performanceTimestampProvider");
const animationFrameProvider_1 = require("../../scheduler/animationFrameProvider");
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
exports.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    return new Observable_1.Observable((subscriber) => {
        const provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        const start = provider.now();
        let id = 0;
        const run = () => {
            if (!subscriber.closed) {
                id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame((timestamp) => {
                    id = 0;
                    const now = provider.now();
                    subscriber.next({
                        timestamp: timestampProvider ? now : timestamp,
                        elapsed: now - start,
                    });
                    run();
                });
            }
        };
        run();
        return () => {
            if (id) {
                animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            }
        };
    });
}
const DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
//# sourceMappingURL=animationFrames.js.map