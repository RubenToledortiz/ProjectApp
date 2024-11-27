import { Router } from "express";
import listController from "../controllers/listController";


class listRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
         //ejecutar cada metodo de list controller
    config(): void{
        this.router.get('/',listController.list);
        this.router.get('/:id',listController.getOne);
        this.router.post('/',listController.create);
        this.router.delete('/:id',listController.delete);
        this.router.put('/:id',listController.update);
    }
}

const listroutes = new listRoutes();

export default listroutes.router;