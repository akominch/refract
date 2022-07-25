Object.defineProperty(exports, "__esModule", { value: true });
exports.isScalar = exports.isDbModifier = exports.isRelation = exports.isUnsupported = exports.isEnum = exports.isEnumKey = exports.isCompound = exports.isAstComment = exports.isComment = exports.isRaw = void 0;
function isRaw(column) {
    return column.type == 'Raw';
}
exports.isRaw = isRaw;
function isComment(column) {
    return column.type == 'Comment';
}
exports.isComment = isComment;
function isAstComment(column) {
    return column.type == 'AstComment';
}
exports.isAstComment = isAstComment;
function isCompound(column) {
    return column.type.startsWith('@@');
}
exports.isCompound = isCompound;
function isEnumKey(column) {
    return column.type == 'EnumKey';
}
exports.isEnumKey = isEnumKey;
function isEnum(column) {
    return column.type == 'Enum';
}
exports.isEnum = isEnum;
function isUnsupported(column) {
    return column.type == 'Unsupported';
}
exports.isUnsupported = isUnsupported;
function isRelation(column) {
    return ['OneToMany', 'ManyToOne', 'OneToOne'].includes(column.type);
}
exports.isRelation = isRelation;
function isDbModifier(column) {
    return column.type.startsWith('@db');
}
exports.isDbModifier = isDbModifier;
function isScalar(column) {
    return (typeof column == 'object' &&
        [
            isRelation(column),
            isEnumKey(column),
            isEnum(column),
            isCompound(column),
        ].every(v => v == false));
}
exports.isScalar = isScalar;
