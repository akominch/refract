Object.defineProperty(exports, "__esModule", { value: true });
exports.$Model = exports.Model = void 0;
const fields_1 = require("../types/fields");
const comments_1 = require("./fields/comments");
const Model = (name, comment) => new $Model(name, comment);
exports.Model = Model;
class $Model {
    name;
    type = 'model';
    columns = [];
    constructor(name, comment) {
        this.name = name;
        if (comment) {
            if (typeof comment === 'string') {
                comment = (0, comments_1.Comment)(comment);
            }
            this.columns.push({
                name: 'comment',
                type: comment.type,
                modifiers: [{ type: 'value', value: comment.value }],
            });
        }
    }
    Mixin(...mixins) {
        mixins.forEach(mixin => this.columns.push(...mixin.columns));
        return this;
    }
    Raw(value) {
        const modifier = { type: 'value', value };
        const column = {
            name: 'raw',
            type: 'Raw',
            modifiers: [modifier],
        };
        this.columns.push(column);
        return this;
    }
    Relation(name, type, comment) {
        if (comment) {
            if (typeof comment === 'string') {
                comment = (0, comments_1.Comment)(comment);
            }
            type.modifiers.push({ type: comment.type, value: comment.value });
        }
        const fields = type.modifiers.find(m => m.type == 'fields');
        if ((0, fields_1.isScalar)(fields?.value?.[1])) {
            this.Field(fields.value[0], fields.value[1]);
            fields.value.pop();
        }
        this.columns.push({ name, ...type });
        return this;
    }
    Field(name, type, comment) {
        if (comment) {
            if (typeof comment === 'string') {
                comment = (0, comments_1.Comment)(comment);
            }
            type.modifiers.push({ type: comment.type, value: comment.value });
        }
        this.columns.push({ name, ...type });
        return this;
    }
    Block(type, comment) {
        if (comment) {
            if (typeof comment === 'string') {
                comment = (0, comments_1.Comment)(comment);
            }
            type.modifiers.push({ type: comment.type, value: comment.value });
        }
        this.columns.push(type);
        return this;
    }
}
exports.$Model = $Model;
