import { Column } from './columns';
export declare type BlockType = 'model' | 'enum';
export declare type Block<T extends BlockType = BlockType> = {
    name: string;
    type: T;
    columns: T extends 'enum' ? Column<'EnumKey' | 'Comment'>[] : Column[];
};
export declare type Model = Block<'model'>;
export declare type Enum = Block<'enum'>;
export declare function isEnum(block: Block): block is Block<'enum'>;
export declare function isModel(block: Block): block is Block<'model'>;
