import { Column } from "./columns";
import { Modifier } from "./modifiers";
import { Type, TypeData } from "./types";

// Column data-type, Varchar, Int etc.
export type Field<T extends Type = keyof TypeData> = {
  type: T;
  modifiers: Array<Modifier>;
};

export type Primitive = "Int" | "Varchar" | "Boolean" | "DateTime" | "Enum";
export type Relation = "OneToMany" | "OneToOne";
export type Any = Primitive | Relation;

export function isEnum(column: Column<Any>): column is Column<"Enum"> {
  return column.type == "Enum";
}

export function isRelation(column: Column<Any>): column is Column<Relation> {
  return ["OneToMany", "ManyToOne"].includes(column.type);
}

export function isPrimitive(column: Column<Any>): column is Column<Primitive> {
  return [isRelation(column), isEnum(column)].every((v) => v == false);
}

// export const OneToOne = (
//   model: Types.Model,
//   columnId: string
// ): Types.Field<"OneToOne"> =>
//   ({
//     type: "OneToOne",
//     modifiers: [
//       { type: "model", value: model },
//       { type: "columnId", value: columnId },
//     ],
//   } as Types.Field<"OneToOne">);
