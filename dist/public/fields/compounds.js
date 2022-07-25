Object.defineProperty(exports, "__esModule", { value: true });
exports.Ignore = exports.Fulltext = exports.Unique = exports.Index = exports.Map = exports.Id = void 0;
const compound = (type) => (values, ...modifiers) => ({
    type,
    modifiers: [{ type: 'values', value: values }, ...modifiers],
});
exports.Id = compound('@@id');
exports.Map = compound('@@map');
exports.Index = compound('@@index');
exports.Unique = compound('@@unique');
exports.Fulltext = compound('@@fulltext');
exports.Ignore = {
    type: '@@ignore',
    modifiers: [],
};
