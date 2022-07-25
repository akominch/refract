export declare const isDate: (v: any) => v is Date;
export declare const isFn: <F extends Function>(v: any) => v is F;
export declare const isString: (v: any) => v is string;
export declare const isArray: (v: any) => v is any[];
declare type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
export declare const entries: <T>(obj: T) => Entries<T>;
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare const del: <T extends Object, K extends string | keyof T>(object: T, key: K) => Exclude<T, K>;
export declare function nonNullable<T>(value: T): value is NonNullable<T>;
export declare const shift: <T extends readonly any[]>(v: T) => T[0];
export declare type Expand<T> = T extends object ? T extends infer O ? {
    [K in keyof O]: Expand<O[K]>;
} : never : T;
export {};
