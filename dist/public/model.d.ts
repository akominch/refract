import * as Types from '../types';
import { CommentType } from './fields/comments';
declare type Model = {
    Mixin: (...mixins: Types.Mixin[]) => Model;
    Raw: (value: string) => Model;
    Relation: <T extends Types.Fields.Relation>(name: string, type: Types.Fields.Field<T>, comment?: CommentType | string) => Model;
    Field: <T extends Types.Fields.Scalar | 'Enum' | 'Unsupported'>(name: string, type: Types.Fields.Field<T>, comment?: CommentType | string) => Model;
    Block: <T extends Types.Fields.Compound>(type: Types.Fields.Field<T>, comment?: CommentType | string) => Model;
} & Types.Blocks.Model;
export declare const Model: (name: string, comment?: CommentType | string) => Model;
export declare class $Model implements Types.Blocks.Model, Model {
    name: string;
    type: 'model';
    columns: Types.Column<Types.Type>[];
    constructor(name: string, comment?: CommentType | string);
    Mixin(...mixins: Types.Mixin[]): this;
    Raw(value: string): this;
    Relation<T extends Types.Fields.Relation>(name: string, type: Types.Fields.Field<T>, comment?: CommentType | string): this;
    Field<T extends Types.Fields.Scalar | 'Enum' | 'Unsupported'>(name: string, type: Types.Fields.Field<T>, comment?: CommentType | string): this;
    Block<T extends Types.Fields.Compound>(type: Types.Fields.Field<T>, comment?: CommentType | string): this;
}
export {};
