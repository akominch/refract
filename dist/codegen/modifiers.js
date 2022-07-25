Object.defineProperty(exports, "__esModule", { value: true });
exports.modifier = void 0;
const transform_1 = require("./transform");
const modifier = (type, modifier) => {
    if (modifier.type.startsWith('@')) {
        const type = modifier.type.split('.').pop();
        return `@db.${type}${Array.isArray(modifier.value)
            ? !modifier.value.length ||
                modifier.value.every(item => item == undefined)
                ? ''
                : `(${modifier.value.join(', ')})`
            : modifier.value == undefined
                ? ''
                : `(${modifier.value})`}`;
    }
    switch (modifier.type) {
        case 'default':
            return `@default(${type == 'Enum' ? modifier.value : (0, transform_1.transform)(modifier.value)})`;
        case 'id':
            return `@id`;
        case 'unique':
            return '@unique';
        case 'updatedAt':
            return '@updatedAt';
        case 'ignore':
            return '@ignore';
        case 'map':
            return `@map("${modifier.value}")`;
        case 'unsupported':
            return `("${modifier.value}")`;
        case 'raw':
            return modifier.value;
    }
};
exports.modifier = modifier;
