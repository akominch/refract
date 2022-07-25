Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = exports.Key = void 0;
const utils_1 = require("../../types/utils");
const comments_1 = require("./comments");
const Key = (...args) => {
    const [name, ...modifiers] = args;
    let lastElement = args[args.length - 1];
    if ((0, utils_1.isString)(lastElement)) {
        lastElement = (0, comments_1.Comment)(lastElement);
    }
    return lastElement.type === comments_1.CommentsTypes.Comment || lastElement.type === comments_1.CommentsTypes.AstComment
        ? {
            name,
            modifiers: [
                ...modifiers.slice(0, modifiers.length - 1),
                { type: lastElement.type, value: lastElement.value },
            ],
        }
        : { name, modifiers: modifiers };
};
exports.Key = Key;
class $Enum extends Function {
    name;
    type = 'enum';
    columns;
    constructor(name, comment, keys) {
        super();
        this.name = name;
        this.columns = keys.map(k => ({
            name: k.name,
            type: 'EnumKey',
            modifiers: k.modifiers,
        }));
        if (comment) {
            if ((0, utils_1.isString)(comment)) {
                comment = (0, comments_1.Comment)(comment);
            }
            this.columns.unshift({
                name: 'comment',
                type: comment.type,
                modifiers: [{ type: 'value', value: comment.value }],
            });
        }
        return new Proxy(this, {
            apply: (target, _, args) => target._call(args[0], ...args.slice(1, args.length - 1)),
        });
    }
    _call(initial = null, ...modifiers) {
        return {
            type: 'Enum',
            modifiers: [
                { type: 'enum', value: this.name },
                initial
                    ? { type: 'default', value: initial }
                    : initial === null
                        ? { type: 'nullable', value: true }
                        : null,
                ...modifiers,
            ].filter((v, i, a) => (0, utils_1.nonNullable)(v) && a.findIndex(m => m.type == v.type) === i),
        };
    }
}
function Enum(name, ...args) {
    let [comment, ...keys] = args;
    if (typeof comment === 'string') {
        comment = (0, comments_1.Comment)(comment);
    }
    return new $Enum(name, comment ? comment : null, keys);
}
exports.Enum = Enum;
