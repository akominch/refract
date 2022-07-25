import { Provider } from '../../types';
export declare type DbModifier<T extends string, P extends Provider, N extends string, K> = {
    scalar: T;
    provider: P;
    value: K;
    type: N;
};
export declare const db: <P extends Provider>(provider: P) => {
    BigInt: <N extends string, K = true>(name: N, value?: K) => DbModifier<"BigInt", P, `@db.${P}.${N}`, K>;
    String: <N_1 extends string, K_1 = true>(name: N_1, value?: K_1) => DbModifier<"String", P, `@db.${P}.${N_1}`, K_1>;
    Float: <N_2 extends string, K_2 = true>(name: N_2, value?: K_2) => DbModifier<"Float", P, `@db.${P}.${N_2}`, K_2>;
    Json: <N_3 extends string, K_3 = true>(name: N_3, value?: K_3) => DbModifier<"Json", P, `@db.${P}.${N_3}`, K_3>;
    Decimal: <N_4 extends string, K_4 = true>(name: N_4, value?: K_4) => DbModifier<"Decimal", P, `@db.${P}.${N_4}`, K_4>;
    Bytes: <N_5 extends string, K_5 = true>(name: N_5, value?: K_5) => DbModifier<"Bytes", P, `@db.${P}.${N_5}`, K_5>;
    DateTime: <N_6 extends string, K_6 = true>(name: N_6, value?: K_6) => DbModifier<"DateTime", P, `@db.${P}.${N_6}`, K_6>;
    Boolean: <N_7 extends string, K_7 = true>(name: N_7, value?: K_7) => DbModifier<"Boolean", P, `@db.${P}.${N_7}`, K_7>;
    Int: <N_8 extends string, K_8 = true>(name: N_8, value?: K_8) => DbModifier<"Int", P, `@db.${P}.${N_8}`, K_8>;
};
