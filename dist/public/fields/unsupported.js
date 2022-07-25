Object.defineProperty(exports, "__esModule", { value: true });
exports.Unsupported = void 0;
const Unsupported = (name, ...modifiers) => ({
    type: 'Unsupported',
    modifiers: [{ type: 'unsupported', value: name }, ...modifiers],
});
exports.Unsupported = Unsupported;
