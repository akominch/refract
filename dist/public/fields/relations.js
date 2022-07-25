Object.defineProperty(exports, "__esModule", { value: true });
exports.OnDelete = exports.OnUpdate = exports.References = exports.Fields = exports.OneToOne = exports.ManyToOne = exports.OneToMany = void 0;
const utils_1 = require("../../types/utils");
const OneToMany = (model, ...modifiers) => ({
    type: 'OneToMany',
    modifiers: [
        { type: 'model', value: model },
        ...((0, utils_1.isString)(modifiers[0])
            ? [{ type: 'name', value: modifiers[0] }, ...modifiers.slice(1)]
            : modifiers),
    ],
});
exports.OneToMany = OneToMany;
const ManyToOne = (model, ...modifiers) => ({
    type: 'ManyToOne',
    modifiers: [
        {
            type: 'model',
            value: model,
        },
        ...((0, utils_1.isString)(modifiers[0])
            ? [{ type: 'name', value: modifiers[0] }, ...modifiers.slice(1)]
            : modifiers),
    ].filter(utils_1.nonNullable),
});
exports.ManyToOne = ManyToOne;
const OneToOne = (model, ...modifiers) => ({
    type: 'OneToOne',
    modifiers: [
        {
            type: 'model',
            value: model,
        },
        ...((0, utils_1.isString)(modifiers[0])
            ? [{ type: 'name', value: modifiers[0] }, ...modifiers.slice(1)]
            : modifiers),
    ].filter(utils_1.nonNullable),
});
exports.OneToOne = OneToOne;
const Fields = (...fields) => ({
    type: 'fields',
    value: fields,
});
exports.Fields = Fields;
const References = (...references) => ({
    type: 'references',
    value: references,
});
exports.References = References;
const OnUpdate = (referentialAction) => ({
    type: 'onUpdate',
    value: referentialAction,
});
exports.OnUpdate = OnUpdate;
const OnDelete = (referentialAction) => ({
    type: 'onDelete',
    value: referentialAction,
});
exports.OnDelete = OnDelete;
