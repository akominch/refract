import * as Types from '../../types';
import { CommentType } from './comments';
export declare const Key: <T extends string>(...args: [name: T, ...modifiers: Types.Modifier<"EnumKey", "map" | "comment">[]] | [name: T, ...modifiers: Types.Modifier<"EnumKey", "map" | "comment">[], comment: string | CommentType]) => Types.Fields.EnumKey<T>;
declare type R<E extends Types.Fields.EnumKey[]> = (<M extends Types.Modifiers<'Enum'>>(initial?: E[number]['name'] | null, ...modifiers: Types.Modifier<'Enum', M>[]) => Types.Fields.Field<'Enum', M>) & Types.Blocks.Enum;
export declare function Enum<E extends Types.Fields.EnumKey[]>(name: string, ...keys: E): R<E>;
export declare function Enum<E extends Types.Fields.EnumKey[]>(name: string, comment: CommentType | string, ...keys: E): R<E>;
export {};
