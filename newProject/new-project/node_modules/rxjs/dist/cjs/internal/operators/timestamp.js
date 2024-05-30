"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = void 0;
const dateTimestampProvider_1 = require("../scheduler/dateTimestampProvider");
const map_1 = require("./map");
function timestamp(timestampProvider = dateTimestampProvider_1.dateTimestampProvider) {
    return (0, map_1.map)((value) => ({ value, timestamp: timestampProvider.now() }));
}
exports.timestamp = timestamp;
//# sourceMappingURL=timestamp.js.map