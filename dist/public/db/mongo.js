Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const _ = (0, utils_1.db)('mongodb');
exports.default = {
    ObjectId: _.String('ObjectId'),
    String: _.String('String'),
};
