Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const _ = (0, utils_1.db)('cockroachdb');
exports.default = {
    Int8: _.BigInt('Int8'),
    Bool: _.Boolean('Bool'),
    TimeStamp: (precision) => _.DateTime('Timestamp', precision),
    Timestamptz: (precision) => _.DateTime('Timestamptz', precision),
    Time: (precision) => _.DateTime('Time', precision),
    Timetz: (precision) => _.DateTime('Timetz', precision),
    Decimal: (precision, scale) => _.Decimal('Decimal', [precision, scale]),
    Float4: _.Float('Float4'),
    Float8: _.Float('Float8'),
    Int2: _.Int('Int2'),
    Int4: _.Int('Int4'),
    Char: (length) => _.String('Char', length),
    CatalogSingleChar: _.String('CatalogSingleChar'),
    String: _.String('String'),
    Date: _.DateTime('Date'),
    Inet: _.String('Inet'),
    Bit: (length) => _.String('Bit', length),
    VarBit: (length) => _.String('VarBit', length),
    Oid: _.Int('Oid'),
    Uuid: _.String('Uuid'),
    JsonB: _.Json('JsonB'),
};
