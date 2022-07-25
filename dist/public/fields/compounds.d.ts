import { Types } from '../..';
import { Fields } from '../../types';
export declare const Id: (values: string[], ...modifiers: Types.Modifier<"@@id", "values" | "comment">[]) => Types.Fields.Field<"@@id", "values" | "comment">;
export declare const Map: (values: string, ...modifiers: Types.Modifier<"@@map", "values" | "comment">[]) => Types.Fields.Field<"@@map", "values" | "comment">;
export declare const Index: (values: string[], ...modifiers: Types.Modifier<"@@index", "map" | "values" | "comment">[]) => Types.Fields.Field<"@@index", "map" | "values" | "comment">;
export declare const Unique: (values: string[], ...modifiers: Types.Modifier<"@@unique", "map" | "values" | "comment">[]) => Types.Fields.Field<"@@unique", "map" | "values" | "comment">;
export declare const Fulltext: (values: string[], ...modifiers: Types.Modifier<"@@fulltext", "values" | "comment">[]) => Types.Fields.Field<"@@fulltext", "values" | "comment">;
export declare const Ignore: Fields.Field<'@@ignore'>;
