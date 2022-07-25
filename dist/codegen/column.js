var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumeration = exports.column = void 0;
const modifiers_1 = require("./modifiers");
const Types = __importStar(require("../types"));
const utils_1 = require("../types/utils");
const column = (column) => {
    if (Types.Fields.isUnsupported(column))
        return unsupported(column);
    if (Types.Fields.isCompound(column))
        return compound(column);
    if (Types.Fields.isComment(column))
        return `\t// ${column.modifiers[0].value}`;
    if (Types.Fields.isAstComment(column))
        return `\t/// ${column.modifiers[0].value}`;
    if (Types.Fields.isRaw(column))
        return `\t${column.modifiers[0].value}`;
    if (Types.Fields.isEnum(column))
        return (0, exports.enumeration)(column);
    if (Types.Fields.isEnumKey(column))
        return enumKey(column);
    if (Types.Fields.isScalar(column))
        return scalar(column);
    if (Types.Fields.isRelation(column))
        return relationship(column);
    throw new Error(`CodegenError: Couldn't figure out type for column: ${column.name}`);
};
exports.column = column;
const unsupported = (column) => {
    const isNullable = column.modifiers.find(({ type }) => type == 'nullable');
    return `\t${column.name} Unsupported${(0, modifiers_1.modifier)(column.type, column.modifiers[0])}${isNullable ? '?' : ''}`;
};
const enumKey = (column) => `\t${column.name} ${column.modifiers
    .map(m => (0, modifiers_1.modifier)(column.type, m))
    .join(' ')}`.trimEnd();
const enumeration = (column) => {
    const [type, ...modifiers] = column.modifiers;
    const isNullable = modifiers.find(({ type }) => type == 'nullable');
    return `\t${column.name} ${type.value}${isNullable ? '?' : ''} ${modifiers
        .map(m => (0, modifiers_1.modifier)(column.type, m))
        .join(' ')}`.trimEnd();
};
exports.enumeration = enumeration;
const scalar = (column) => {
    const isNullable = column.modifiers.find(({ type }) => type == 'nullable');
    const isArray = column.modifiers.find(({ type }) => type == 'array');
    return `\t${column.name} ${column.type}${isArray ? '[]' : ''}${isNullable ? '?' : ''} ${column.modifiers.map(m => (0, modifiers_1.modifier)(column.type, m)).join(' ')}`.trimEnd();
};
const compound = (column) => {
    if (column.type == '@@ignore')
        return `\t${column.type}`;
    if (column.type == '@@map')
        return `\t${column.type}(${`"${column.modifiers[0].value}"`})`;
    const map = column.modifiers.find(v => v.type == 'map');
    const args = [
        `[${column.modifiers[0].value.join(', ')}]`,
        map ? `map: "${map.value}"` : null,
    ].filter(utils_1.nonNullable);
    return `\t${column.type}(${args.join(', ')})`;
};
const relationship = (column) => {
    if (column.type == 'OneToOne' || column.type == 'ManyToOne') {
        const modifiers = column.modifiers;
        const isNullable = modifiers.find(({ type }) => type === 'nullable');
        const [model, ...restModifiers] = modifiers.filter(({ type }) => type !== 'nullable');
        const relationModifier = restModifiers.length
            ? `@relation(${restModifiers
                .sort(({ type }) => (type === 'name' ? -1 : 0))
                .map(({ type, value }) => type === 'name'
                ? `"${value}"`
                : `${type}: ${(0, utils_1.isArray)(value) ? `[${value.join(', ')}]` : value}`)
                .join(', ')})`
            : '';
        return `\t${column.name} ${(0, utils_1.isString)(model.value) ? model.value : model.value.name}${isNullable ? '?' : ''} ${relationModifier}`.trimEnd();
    }
    if (column.type == 'OneToMany') {
        const [model, relationName] = column.modifiers;
        const relationModifier = relationName
            ? `@relation("${relationName.value}")`
            : '';
        return `\t${column.name} ${(0, utils_1.isString)(model.value) ? model.value : model.value.name}[] ${relationModifier}`.trimEnd();
    }
};
