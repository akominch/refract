import { Type, TypeData } from './types';
export declare type Modifier<T extends Type = Type, Property extends Modifiers<T> = Modifiers<T>> = {
    type: Property;
    value: TypeData[T][Property];
};
export declare type Modifiers<T extends Type> = keyof TypeData[T];
import { Cockroach, Mongo, MySql, Postgres } from '../public/db';
import { Provider } from './config';
declare type Db = {
    mysql: typeof MySql;
    mongodb: typeof Mongo;
    postgresql: typeof Postgres;
    cockroach: typeof Cockroach;
};
declare type DbModifer = {
    scalar: string;
    type: string;
    value: any;
    provider: Provider;
};
declare type DbMap = Record<string, DbModifer | ((...args: any) => DbModifer)>;
declare type Flatten<T extends DbMap> = {
    [index in keyof T]: T[index] extends (...args: any) => DbModifer ? ReturnType<T[index]> : T[index];
};
declare type FlattenedDb = {
    [db in keyof Db]: Flatten<Db[db]>;
};
declare type FlatUnionDb = {
    [db in keyof FlattenedDb]: FlattenedDb[db][keyof FlattenedDb[db]];
};
declare type FlatFlatUnion = FlatUnionDb[keyof FlatUnionDb];
declare type GroupBy<T extends Record<D, PropertyKey>, D extends keyof T> = {
    [K in T[D]]: T extends Record<D, K> ? T : never;
};
declare type Transform<T extends Record<string, any>> = {
    [index in keyof T]: {
        [i in T[index]['type']]: T[index]['value'];
    };
};
declare type Map = Transform<GroupBy<FlatFlatUnion, 'scalar'>>;
export declare type MergeDbModifiers<T> = {
    [type in keyof T]: Map extends {
        [P in type]: infer _;
    } ? T[type] & Map[type] : T[type];
};
export {};
