"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_routes_1 = __importDefault(require("../routes/task.routes"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
class Server {
    constructor() {
        this.apiPath = {
            tasks: '/api/tasks'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '3000';
        this.URI = process.env.DB_CNN || '';
        mongoose_1.default.connect(this.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
            .then(db => console.log('Db is connected'))
            .catch(error => console.error(error));
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
    }
    routes() {
        this.app.use(this.apiPath.tasks, task_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en el puerto ' + this.port);
        });
    }
}
exports.default = Server;
