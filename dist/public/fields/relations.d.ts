import * as Types from '../../types';
import { ReferentialAction, Relation } from '../../types/fields';
declare type OptionallyWithName<T extends Relation, M extends Types.Modifier<T>[]> = [name: string, ...rest: M] | M;
export declare const OneToMany: <M extends Types.Blocks.Model>(model: M, ...modifiers: OptionallyWithName<'OneToMany', Types.Modifier<'OneToMany'>[]>) => Types.Fields.Field<"OneToMany", "name" | "comment" | "model">;
export declare const ManyToOne: <T extends "ManyToOne", M extends Types.Blocks.Model, K extends "name" | "comment" | "model" | "nullable" | "fields" | "references" | "onUpdate" | "onDelete">(model: M, ...modifiers: OptionallyWithName<"ManyToOne", [fields: Types.Modifier<"ManyToOne", "fields">, references: Types.Modifier<"ManyToOne", "references">, ...modifiers: Types.Modifier<"ManyToOne", Exclude<K, "name" | "fields" | "references">>[]]>) => Types.Fields.Field<T, K>;
export declare const OneToOne: <T extends "OneToOne", M extends Types.Blocks.Model, K extends "name" | "comment" | "model" | "nullable" | "fields" | "references" | "onUpdate" | "onDelete">(model: M, ...modifiers: OptionallyWithName<"OneToOne", [fields: Types.Modifier<"OneToOne", "fields">, references: Types.Modifier<"OneToOne", "references">, ...modifiers: Types.Modifier<"OneToOne", Exclude<K, "name" | "fields" | "references">>[]]> | OptionallyWithName<T, Types.Modifier<T, Exclude<K, "fields" | "references">>[]>) => Types.Fields.Field<T, K>;
export declare const Fields: <T extends "OneToOne" | "ManyToOne">(...fields: string[] | [
    reference: string,
    scalar: Types.Fields.Field<'Int'> | Types.Fields.Field<'String'>
]) => Types.Modifier<T, "fields">;
export declare const References: <T extends "OneToOne" | "ManyToOne">(...references: string[]) => Types.Modifier<T, "references">;
export declare const OnUpdate: <T extends "OneToOne" | "ManyToOne">(referentialAction: ReferentialAction) => Types.Modifier<T, "onUpdate">;
export declare const OnDelete: <T extends "OneToOne" | "ManyToOne">(referentialAction: ReferentialAction) => Types.Modifier<T, "onDelete">;
export {};
