Object.defineProperty(exports, "__esModule", { value: true });
exports.alignFields = exports.alignKv = void 0;
const utils_1 = require("../types/utils");
const alignKv = (value) => {
    const lines = value.split('\n');
    const delimiter = '=';
    const max = Math.max(...lines.map(l => l.trim().split(delimiter).shift().length)) + 1;
    return lines
        .map(line => line.split(delimiter))
        .map(([head, ...rest]) => [head.padEnd(max), delimiter, ...rest.map(v => v.trim())].join(' '))
        .join('\n');
};
exports.alignKv = alignKv;
const alignFields = (value) => {
    const lines = value.split('\n');
    const [maximumColumnName, maximumColumnType] = lines
        .map(l => l.split(' '))
        .reduce(([maxName, maxType], [name, type]) => [
        Math.max(maxName, name.length),
        Math.max(maxType, (type ?? '').length),
    ], [0, 0]);
    return lines
        .map(line => line.split(' '))
        .map(([columnName, columnType, ...rest]) => {
        return ([n => n.startsWith('@@'), n => n == '//'].some(fn => fn(columnName.trim()))
            ? [columnName, columnType, ...rest].filter(utils_1.nonNullable)
            : [
                columnName.padEnd(maximumColumnName + 1),
                columnType ? columnType.padEnd(maximumColumnType + 1) : '',
                ...rest.map(v => v.trim()),
            ]).join(' ');
    })
        .map(v => v.trimEnd())
        .join('\n');
};
exports.alignFields = alignFields;
function pp(columnName) {
    console.log(JSON.stringify(columnName));
}
