Object.defineProperty(exports, "__esModule", { value: true });
exports.Limit = exports.Raw = exports.Array = exports.Ignore = exports.Id = exports.Nullable = exports.UpdatedAt = exports.Unique = exports.Map = exports.Default = void 0;
const Default = (value) => ({ type: 'default', value });
exports.Default = Default;
const Map = (value) => ({ type: 'map', value });
exports.Map = Map;
exports.Unique = {
    type: 'unique',
    value: true,
};
exports.UpdatedAt = {
    type: 'updatedAt',
    value: true,
};
exports.Nullable = {
    type: 'nullable',
    value: true,
};
exports.Id = {
    type: 'id',
    value: true,
};
exports.Ignore = {
    type: 'ignore',
    value: true,
};
exports.Array = {
    type: 'array',
    value: true,
};
const Raw = (value) => ({ type: 'raw', value });
exports.Raw = Raw;
const Limit = (value) => ({ type: 'limit', value });
exports.Limit = Limit;
