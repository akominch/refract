import * as Types from '../../types';
export declare const Int: <M extends "raw" | "map" | "default" | "id" | "@db.postgresql.SmallInt" | "@db.postgresql.Oid" | "@db.mysql.UnsignedSmallInt" | "@db.mysql.MediumInt" | "@db.mysql.UnsignedMediumInt" | "@db.mysql.Year" | "@db.cockroachdb.Int2" | "@db.cockroachdb.Int4" | "@db.cockroachdb.Oid" | "comment" | "nullable" | "ignore" | "array" | "unique">(...modifiers: Types.Modifier<"Int", M>[]) => {
    type: "Int";
    modifiers: Types.Modifier<"Int", M>[];
};
export declare const String: <M extends "raw" | "map" | "default" | "id" | "@db.mongodb.ObjectId" | "@db.mongodb.String" | "@db.postgresql.Text" | "@db.postgresql.Inet" | "@db.postgresql.Uuid" | "@db.postgresql.Xml" | "@db.postgresql.Citext" | "@db.postgresql.Char" | "@db.postgresql.VarChar" | "@db.postgresql.Bit" | "@db.postgresql.VarBit" | "@db.mysql.Text" | "@db.mysql.Char" | "@db.mysql.VarChar" | "@db.cockroachdb.CatalogSingleChar" | "@db.cockroachdb.String" | "@db.cockroachdb.Inet" | "@db.cockroachdb.Uuid" | "@db.cockroachdb.Char" | "@db.cockroachdb.Bit" | "@db.cockroachdb.VarBit" | "comment" | "nullable" | "ignore" | "array" | "unique" | "limit">(...modifiers: Types.Modifier<"String", M>[]) => {
    type: "String";
    modifiers: Types.Modifier<"String", M>[];
};
export declare const Float: <M extends "raw" | "map" | "default" | "@db.postgresql.Real" | "@db.postgresql.DoublePrecision" | "@db.mysql.Float" | "@db.mysql.Double" | "@db.cockroachdb.Float4" | "@db.cockroachdb.Float8" | "comment" | "nullable" | "ignore" | "array" | "unique">(...modifiers: Types.Modifier<"Float", M>[]) => {
    type: "Float";
    modifiers: Types.Modifier<"Float", M>[];
};
export declare const BigInt: <M extends "raw" | "map" | "default" | "@db.postgresql.BigInt" | "@db.mysql.UnsignedBigInt" | "@db.mysql.BigInt" | "@db.mysql.SmallInt" | "@db.cockroachdb.Int8" | "comment" | "nullable" | "ignore" | "array" | "unique">(...modifiers: Types.Modifier<"BigInt", M>[]) => {
    type: "BigInt";
    modifiers: Types.Modifier<"BigInt", M>[];
};
export declare const Bytes: <M extends "raw" | "map" | "default" | "@db.postgresql.ByteA" | "@db.mysql.VarBinary" | "@db.mysql.LongBlog" | "@db.mysql.TinyBlob" | "@db.mysql.MediumBlob" | "@db.mysql.Blob" | "@db.mysql.Binary" | "@db.mysql.Bit" | "comment" | "nullable" | "ignore" | "array" | "unique">(...modifiers: Types.Modifier<"Bytes", M>[]) => {
    type: "Bytes";
    modifiers: Types.Modifier<"Bytes", M>[];
};
export declare const Boolean: <M extends "raw" | "map" | "default" | "@db.postgresql.Boolean" | "@db.mysql.TinyInt" | "@db.cockroachdb.Bool" | "comment" | "nullable" | "ignore" | "array" | "unique">(...modifiers: Types.Modifier<"Boolean", M>[]) => {
    type: "Boolean";
    modifiers: Types.Modifier<"Boolean", M>[];
};
export declare const Json: <M extends "raw" | "map" | "default" | "@db.postgresql.Json" | "@db.postgresql.JsonB" | "@db.mysql.Json" | "@db.cockroachdb.JsonB" | "comment" | "nullable" | "ignore" | "array">(...modifiers: Types.Modifier<"Json", M>[]) => {
    type: "Json";
    modifiers: Types.Modifier<"Json", M>[];
};
export declare const DateTime: <M extends "raw" | "map" | "default" | "@db.postgresql.Date" | "@db.postgresql.Timestamp" | "@db.postgresql.Timestamptz" | "@db.postgresql.Time" | "@db.postgresql.Timetz" | "@db.mysql.DateTime" | "@db.mysql.Date" | "@db.mysql.Timestamp" | "@db.mysql.Time" | "@db.cockroachdb.Date" | "@db.cockroachdb.Timestamptz" | "@db.cockroachdb.Time" | "@db.cockroachdb.Timetz" | "@db.cockroachdb.Timestamp" | "comment" | "nullable" | "ignore" | "array" | "updatedAt">(...modifiers: Types.Modifier<"DateTime", M>[]) => {
    type: "DateTime";
    modifiers: Types.Modifier<"DateTime", M>[];
};
export declare const Decimal: <M extends "raw" | "map" | "default" | "@db.postgresql.Money" | "@db.postgresql.Decimal" | "@db.mysql.Decimal" | "@db.cockroachdb.Decimal" | "comment" | "nullable" | "ignore" | "array" | "unique">(...modifiers: Types.Modifier<"Decimal", M>[]) => {
    type: "Decimal";
    modifiers: Types.Modifier<"Decimal", M>[];
};
