Object.defineProperty(exports, "__esModule", { value: true });
exports.block = exports.header = void 0;
const header = (name, len = 80) => `// ${name} ${'-'.repeat(len - name.length)}`;
exports.header = header;
const block = (name, content) => [`${name} {`, content, `}`].join('\n');
exports.block = block;
