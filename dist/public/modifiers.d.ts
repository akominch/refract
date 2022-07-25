import * as Types from '../types';
export declare const Default: <T extends "BigInt" | "String" | "Float" | "Json" | "Decimal" | "Bytes" | "DateTime" | "Boolean" | "Int", K extends Types.TypeData[T]["default"]>(value: K) => Types.Modifier<T, "default">;
export declare const Map: <T extends "BigInt" | "String" | "Float" | "Json" | "Decimal" | "Bytes" | "DateTime" | "Boolean" | "Int" | "@@unique" | "@@index" | "EnumKey", K extends Types.TypeData[T]["map"]>(value: K) => Types.Modifier<T, "map">;
export declare const Unique: {
    readonly type: "unique";
    readonly value: true;
};
export declare const UpdatedAt: {
    readonly type: "updatedAt";
    readonly value: true;
};
export declare const Nullable: {
    readonly type: "nullable";
    readonly value: true;
};
export declare const Id: {
    readonly type: "id";
    readonly value: true;
};
export declare const Ignore: {
    readonly type: "ignore";
    readonly value: true;
};
export declare const Array: {
    readonly type: "array";
    readonly value: true;
};
export declare const Raw: (value: string) => {
    type: "raw";
    value: string;
};
export declare const Limit: <K extends number>(value: K) => Types.Modifier<'String', 'limit'>;
