import * as Types from '../../types';
export declare const Unsupported: <M extends "nullable" | "unsupported">(name: string, ...modifiers: Types.Modifier<"Unsupported", M>[]) => {
    type: "Unsupported";
    modifiers: (Types.Modifier<"Unsupported", M> | {
        type: "unsupported";
        value: string;
    })[];
};
