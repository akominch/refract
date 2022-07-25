Object.defineProperty(exports, "__esModule", { value: true });
exports.extractComments = exports.model = void 0;
const comments_1 = require("../public/fields/comments");
const utils_1 = require("../types/utils");
const align_1 = require("./align");
const block_1 = require("./block");
const column_1 = require("./column");
const model = (model) => {
    const [comments, columns] = (0, exports.extractComments)(model.columns);
    return [
        comments,
        (0, block_1.block)(`model ${model.name}`, (0, align_1.alignFields)(columns.map(column_1.column).join('\n'))),
    ]
        .filter(utils_1.nonNullable)
        .join('\n')
        .trim();
};
exports.model = model;
const extractComments = (columns) => {
    const isUsualComment = (c) => c?.type === comments_1.CommentsTypes.Comment;
    const isAstComment = (c) => c?.type === comments_1.CommentsTypes.AstComment;
    const isComment = (c) => isUsualComment(c) || isAstComment(c);
    return [
        columns
            .filter(c => isComment(c))
            .map(c => isAstComment(c) ? `/// ${c.modifiers[0].value}` : `// ${c.modifiers[0].value}`)
            .join('\n'),
        columns
            .filter(c => !isComment(c))
            .reduce((cols, column) => [
            ...cols,
            ...column.modifiers
                .filter(c => isComment(c))
                .map(c => ({
                name: 'comment',
                type: c.type,
                modifiers: [c],
            })),
            {
                ...column,
                modifiers: column.modifiers.filter(c => !isComment(c)),
            },
        ], []),
    ];
};
exports.extractComments = extractComments;
