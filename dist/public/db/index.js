var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cockroach = exports.Postgres = exports.MySql = exports.Mongo = void 0;
var mongo_1 = require("./mongo");
Object.defineProperty(exports, "Mongo", { enumerable: true, get: function () { return __importDefault(mongo_1).default; } });
var mysql_1 = require("./mysql");
Object.defineProperty(exports, "MySql", { enumerable: true, get: function () { return __importDefault(mysql_1).default; } });
var postgresql_1 = require("./postgresql");
Object.defineProperty(exports, "Postgres", { enumerable: true, get: function () { return __importDefault(postgresql_1).default; } });
var cockroach_1 = require("./cockroach");
Object.defineProperty(exports, "Cockroach", { enumerable: true, get: function () { return __importDefault(cockroach_1).default; } });
