Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const db = (provider) => {
    const type = (scalar) => (name, value) => ({
        type: `@db.${provider}.${name}`,
        value,
        scalar,
        provider,
    });
    const BigInt = type('BigInt');
    const String = type('String');
    const Float = type('Float');
    const Json = type('Json');
    const Decimal = type('Decimal');
    const Bytes = type('Bytes');
    const DateTime = type('DateTime');
    const Boolean = type('Boolean');
    const Int = type('Int');
    return {
        BigInt,
        String,
        Float,
        Json,
        Decimal,
        Bytes,
        DateTime,
        Boolean,
        Int,
    };
};
exports.db = db;
