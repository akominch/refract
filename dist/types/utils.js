Object.defineProperty(exports, "__esModule", { value: true });
exports.shift = exports.nonNullable = exports.del = exports.entries = exports.isArray = exports.isString = exports.isFn = exports.isDate = void 0;
const isDate = (v) => v instanceof Date && !isNaN(v);
exports.isDate = isDate;
const isFn = (v) => typeof v == 'function';
exports.isFn = isFn;
const isString = (v) => typeof v == 'string';
exports.isString = isString;
const isArray = (v) => Array.isArray(v);
exports.isArray = isArray;
const entries = (obj) => Object.entries(obj);
exports.entries = entries;
const del = (object, key) => (delete object[key], object);
exports.del = del;
function nonNullable(value) {
    return value !== null && value !== undefined;
}
exports.nonNullable = nonNullable;
const shift = (v) => v.shift();
exports.shift = shift;
