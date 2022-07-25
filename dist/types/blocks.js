Object.defineProperty(exports, "__esModule", { value: true });
exports.isModel = exports.isEnum = void 0;
function isEnum(block) {
    return block.type == 'enum';
}
exports.isEnum = isEnum;
function isModel(block) {
    return block.type == 'model';
}
exports.isModel = isModel;
