import express, { Application } from 'express';
import indexroutes from './routes/indexroutes';
import listroutes from './routes/listRoutes';
import moorgan from 'morgan';
import cors from 'cors';

class Server {

    public app: Application
    //iniciar todo
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //configuración del servidor
    config(): void {
        //asignar el puerto default o sino al 3000
        this.app.set('port', process.env.PORT || 3000)
        //modulos usados
        //ver pediciones al servidor
        this.app.use(moorgan('dev'));
        //pedir datos al servidor
        this.app.use(cors());
        //guardar los datos como formato json
        this.app.use(express.json());
        //enviar desde formulario html
        this.app.use(express.urlencoded({ extended: false }));
    }
    //rutas que usa la aplicación
    routes(): void {
        //ruta inicial
        this.app.use('/', indexroutes);
        //ruta de una página
        this.app.use('/api/lista', listroutes);
    }
    //inicalizar el servidor
    start(): void {
        //servidor escuchando el puerto asignado
        this.app.listen(this.app.get("port"), () => {
            console.log("Puerto", this.app.get("port"))
        })
    }
}

const server = new Server();
server.start();