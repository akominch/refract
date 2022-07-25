import { Modifier } from './modifiers';
import { Type } from './types';
export declare type Column<T extends Type = Type> = {
    name: string;
    type: T;
    modifiers: Modifier<T>[];
};
