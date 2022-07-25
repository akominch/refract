var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = exports.Compound = void 0;
__exportStar(require("./public/modifiers"), exports);
__exportStar(require("./public/model"), exports);
__exportStar(require("./public/mixin"), exports);
__exportStar(require("./public/fields/scalars"), exports);
__exportStar(require("./public/fields/enums"), exports);
__exportStar(require("./public/fields/relations"), exports);
__exportStar(require("./public/fields/unsupported"), exports);
__exportStar(require("./public/fields/comments"), exports);
exports.Compound = __importStar(require("./public/fields/compounds"));
exports.Types = __importStar(require("./types"));
__exportStar(require("./public/db"), exports);
const promises_1 = require("fs/promises");
const codegen_1 = __importDefault(require("./codegen"));
exports.default = (config) => (({ schema, output, time }) => (0, promises_1.writeFile)(output, schema, 'utf8').then(() => console.log(`Created schema at: ${output} (${time} ms)`)))((0, codegen_1.default)(config));
