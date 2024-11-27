import { Router } from "express";
import { indexcontroller } from '../controllers/indexController'
class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
        //ejecutar el metodo index al entrar en la página principal
    config(): void{
        this.router.get('/',indexcontroller.index)

    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;