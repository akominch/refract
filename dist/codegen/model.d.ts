import * as Types from '../types';
export declare const model: (model: Types.Blocks.Model) => string;
export declare const extractComments: (columns: Types.Column<any>[]) => [outside: string, columns: Types.Column<"BigInt" | "String" | "Float" | "Json" | "Decimal" | "Bytes" | "DateTime" | "Boolean" | "Int" | "@@id" | "@@unique" | "@@index" | "@@ignore" | "@@map" | "@@fulltext" | "OneToMany" | "OneToOne" | "ManyToOne" | keyof Types.Enums | "Comment" | "AstComment" | "Raw" | "Unsupported">[]];
