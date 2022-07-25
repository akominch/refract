Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = exports.kv = void 0;
const utils_1 = require("../types/utils");
const kv = (properties) => {
    return (0, utils_1.entries)(properties)
        .map(([key, value]) => `\t${key} = ${(0, exports.transform)(value)}`)
        .join('\n');
};
exports.kv = kv;
const transform = (value) => {
    switch (typeof value) {
        case 'string': {
            if (/^.*\(.*\)$/.test(value))
                return value;
            return `"${value}"`;
        }
        case 'number':
            return value.toString();
        case 'boolean':
            return value == true ? 'true' : 'false';
        case 'object':
            return JSON.stringify(value);
        default:
            return '';
    }
};
exports.transform = transform;
