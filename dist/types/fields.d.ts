import { Column } from './columns';
import { Modifier, Modifiers } from './modifiers';
import { Type, TypeData } from './types';
import { UnionToIntersection } from './utils';
import * as Types from './types';
import { Provider } from './config';
import { DbModifier } from '../public/db/utils';
export declare type Field<T extends Type, M extends Modifiers<T> = Modifiers<T>> = {
    type: T;
    modifiers: Modifier<T, M>[];
};
export declare type EnumKey<T extends string = string> = {
    name: T;
    modifiers: Modifier<'EnumKey'>[];
};
export declare type Scalar = keyof Types.Scalars;
export declare type Enum = keyof Types.Enums;
export declare type Relation = keyof Types.Relations;
export declare type Compound = keyof Types.Compounds;
export declare type Any = Scalar | Relation | Enum | Compound | 'Raw' | 'Unsupported';
export declare type ReferentialAction = 'Cascade' | 'Restrict' | 'NoAction' | 'SetNull' | 'SetDefault';
declare type TopColumn = {
    name: string;
    type: Type;
    modifiers: Array<{
        type: keyof UnionToIntersection<{
            [type in Type]: TypeData[type];
        }[Type]>;
        value: any;
    }>;
};
export declare function isRaw(column: TopColumn): column is Column<'Raw'>;
export declare function isComment(column: TopColumn): column is Column<'Comment'>;
export declare function isAstComment(column: TopColumn): column is Column<'AstComment'>;
export declare function isCompound(column: TopColumn): column is Column<Compound>;
export declare function isEnumKey(column: TopColumn): column is Column<'EnumKey'>;
export declare function isEnum(column: TopColumn): column is Column<'Enum'>;
export declare function isUnsupported(column: TopColumn): column is Column<'Unsupported'>;
export declare function isRelation(column: TopColumn): column is Column<Relation>;
export declare function isDbModifier(column: Modifier<any>): column is DbModifier<string, Provider, string, any>;
export declare function isScalar(column: TopColumn): column is Column<Scalar>;
export {};
