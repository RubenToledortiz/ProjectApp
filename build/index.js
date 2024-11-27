"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const listRoutes_1 = __importDefault(require("./routes/listRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    //iniciar todo
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //configuración del servidor
    config() {
        //asignar el puerto default o sino al 3000
        this.app.set('port', process.env.PORT || 3000);
        //modulos usados
        //ver pediciones al servidor
        this.app.use((0, morgan_1.default)('dev'));
        //pedir datos al servidor
        this.app.use((0, cors_1.default)());
        //guardar los datos como formato json
        this.app.use(express_1.default.json());
        //enviar desde formulario html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //rutas que usa la aplicación
    routes() {
        //ruta inicial
        this.app.use('/', indexroutes_1.default);
        //ruta de una página
        this.app.use('/api/lista', listRoutes_1.default);
    }
    //inicalizar el servidor
    start() {
        //servidor escuchando el puerto asignado
        this.app.listen(this.app.get("port"), () => {
            console.log("Puerto", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
