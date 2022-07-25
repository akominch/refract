Object.defineProperty(exports, "__esModule", { value: true });
exports.enumeration = void 0;
const utils_1 = require("../types/utils");
const block_1 = require("./block");
const column_1 = require("./column");
const model_1 = require("./model");
const enumeration = (e) => {
    const [comments, columns] = (0, model_1.extractComments)(e.columns);
    return [comments, (0, block_1.block)(`enum ${e.name}`, columns.map(column_1.column).join('\n'))]
        .filter(utils_1.nonNullable)
        .join('\n')
        .trim();
};
exports.enumeration = enumeration;
