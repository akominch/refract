var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const path_1 = __importDefault(require("path"));
const validate = (config) => {
    if (config.datasource.referentialIntegrity) {
        if (!config.generators.some(g => g.previewFeatures?.includes('referentialIntegrity')))
            throw new Error("Must have a generator with the 'referentialIntegrity' preview feature enabled to use referential integrity in the datasource");
    }
    if (config.datasource.provider == 'mysql') {
        if (config.generators.some(g => g.previewFeatures?.includes('fullTextSearch') &&
            !g.previewFeatures?.includes('fullTextIndex')))
            throw new Error('MySQL Users must include both fullTextSearch & fullTextIndex in the preview features.');
    }
    return {
        ...config,
        output: config.output || path_1.default.join(process.cwd(), 'schema.prisma'),
    };
};
exports.validate = validate;
