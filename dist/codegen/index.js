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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const Types = __importStar(require("../types"));
const types_1 = require("../types");
const utils_1 = require("../types/utils");
const align_1 = require("./align");
const block_1 = require("./block");
const enum_1 = require("./enum");
const dedent_1 = require("./lib/dedent");
const pipe_1 = require("./lib/pipe");
const model_1 = require("./model");
const transform_1 = require("./transform");
const validate_1 = require("./validate");
exports.default = (config) => {
    const start = perf_hooks_1.performance.now();
    const schema = Array.isArray(config.schema)
        ? config.schema
        : Object.values(config.schema);
    config = (0, types_1.validate)({ ...config, schema });
    const datasource = config.datasource;
    const generators = config.generators;
    const enums = schema.filter(Types.Blocks.isEnum);
    const models = schema.filter(Types.Blocks.isModel);
    const group = (header, blocks) => blocks.length == 0 ? null : [header, blocks.join('\n\n')].join('\n\n');
    const generated = (0, dedent_1.dedent)([
        (0, block_1.header)('datasource'),
        (0, block_1.block)('datasource db', (0, align_1.alignKv)((0, transform_1.kv)(datasource))),
        group((0, block_1.header)('generators'), generators.map(generator => (0, block_1.block)(`generator ${generator.name}`, (0, align_1.alignKv)((0, transform_1.kv)((0, utils_1.del)(generator, 'name')))))),
        group((0, block_1.header)('enums'), enums.map(enum_1.enumeration)),
        group((0, block_1.header)('models'), models.map((0, pipe_1.pipe)((0, validate_1.validateModel)(config), model_1.model))),
    ]
        .filter(utils_1.nonNullable)
        .flat()
        .join('\n\n'));
    const end = perf_hooks_1.performance.now();
    const time = Number((end - start).toFixed(3));
    return {
        time,
        output: config.output,
        schema: [
            (0, block_1.header)(`refract https://github.com/cwqt/refract - generated in ${time} ms`),
            generated,
        ].join('\n'),
    };
};
