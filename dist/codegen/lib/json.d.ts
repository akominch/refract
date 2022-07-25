export declare type Class<T, Arguments extends unknown[] = any[]> = Constructor<T, Arguments> & {
    prototype: T;
};
export declare type Constructor<T, Arguments extends unknown[] = any[]> = new (...arguments_: Arguments) => T;
export declare type JsonObject = {
    [Key in string]?: JsonValue;
};
export declare type JsonArray = JsonValue[];
export declare type JsonPrimitive = string | number | boolean | null;
export declare type JsonValue = JsonPrimitive | JsonObject | JsonArray;
