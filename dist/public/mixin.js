Object.defineProperty(exports, "__esModule", { value: true });
exports.Mixin = void 0;
const model_1 = require("./model");
const Mixin = () => {
    const model = (0, model_1.Model)('mixin');
    return {
        Field: model.Field,
        Block: model.Block,
        columns: model.columns,
    };
};
exports.Mixin = Mixin;
