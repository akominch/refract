import { Block } from './blocks';
export declare type Provider = 'mongodb' | 'postgresql' | 'mysql' | 'sqlite' | 'sqlserver' | 'cockroachdb';
export declare type Datasource = {
    provider: Provider;
    url: string;
    shadowDatabaseUrl?: string;
    referentialIntegrity?: 'prisma' | 'foreignKeys';
};
declare type PreviewFeatures = 'filterJson' | 'interactiveTransactions' | 'fullTextSearch' | 'referentialIntegrity' | 'dataProxy' | 'extendedIndexes' | 'fullTextIndex' | 'cockroachdb';
export declare type Generator = {
    name: string;
    provider: string;
    output?: string;
    previewFeatures?: PreviewFeatures[];
    engineType?: 'library' | 'binary';
    binaryTargets?: string[];
    [key: string]: any;
};
export declare type Config = {
    datasource: Datasource;
    generators: Generator[];
    output?: string;
    schema: Block[] | Record<string, Block>;
};
export declare const validate: (config: Config) => Config;
export {};
