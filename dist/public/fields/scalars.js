Object.defineProperty(exports, "__esModule", { value: true });
exports.Decimal = exports.DateTime = exports.Json = exports.Boolean = exports.Bytes = exports.BigInt = exports.Float = exports.String = exports.Int = void 0;
const scalar = (type) => (...modifiers) => ({
    type,
    modifiers,
});
exports.Int = scalar('Int');
exports.String = scalar('String');
exports.Float = scalar('Float');
exports.BigInt = scalar('BigInt');
exports.Bytes = scalar('Bytes');
exports.Boolean = scalar('Boolean');
exports.Json = scalar('Json');
exports.DateTime = scalar('DateTime');
exports.Decimal = scalar('Decimal');
