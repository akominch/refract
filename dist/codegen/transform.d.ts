import { Column } from '../types/columns';
import { JsonValue } from './lib/json';
declare type Primitive = Date | boolean | number | string | true | false | BigInt | JsonValue;
declare type Properties = Record<string, Primitive | Array<Primitive> | Column>;
export declare const kv: (properties: Properties) => string;
export declare const transform: (value: Properties[string]) => string;
export {};
