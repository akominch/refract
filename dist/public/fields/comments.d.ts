export declare enum CommentsTypes {
    Comment = "Comment",
    AstComment = "AstComment"
}
export declare const Comment: (value: string) => CommentType;
export declare const AstComment: (value: string) => CommentType;
export declare type CommentType = {
    type: CommentsTypes;
    value: string;
};
