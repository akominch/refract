Object.defineProperty(exports, "__esModule", { value: true });
exports.AstComment = exports.Comment = exports.CommentsTypes = void 0;
var CommentsTypes;
(function (CommentsTypes) {
    CommentsTypes["Comment"] = "Comment";
    CommentsTypes["AstComment"] = "AstComment";
})(CommentsTypes = exports.CommentsTypes || (exports.CommentsTypes = {}));
const comment = (type) => (value) => ({
    type,
    value,
});
exports.Comment = comment(CommentsTypes.Comment);
exports.AstComment = comment(CommentsTypes.AstComment);
