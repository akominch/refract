import { JsonValue } from '../codegen/lib/json';
import { Model } from './blocks';

// Primitive data-types
export type TypeData = {
  Int: {
    unique?: true;
    index?: true;
    default?: 'autoincrement()' | number;
    nullable?: true;
  };
  Varchar: { unique?: true; default?: string; nullable?: true; limit?: number };
  Boolean: { unique?: true; index?: true; default?: boolean; nullable?: true };
  DateTime: { default?: 'now()'; nullable?: true; updatedAt?: true };
  Json: { nullable?: true; default?: JsonValue };
  // Escape hatch
  Raw: { value: string };
  //   status           SubscriptionStatus @default(Paused)
  Enum: { nullable?: true; default?: string; enum: string };
  // @relation(fields: [customerId], references: [id])
  OneToMany: { model: Model | string; nullable?: true };
  OneToOne: {
    model: Model | string;
    nullable?: true;
    fields: string[];
    references: string[];
  };
  ManyToOne: {
    nullable?: true;
    model: Model | string;
    fields: string[];
    references: string[];
  };
};

// All possible column datatypes & their accepted modifiers/parameters
export type Type = keyof TypeData;
