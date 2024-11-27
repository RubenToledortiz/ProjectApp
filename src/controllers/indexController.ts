import { Request, Response} from 'express'

class IndexControllers {
// mostrar en la página inicial donde esta la api 
    public index(req: Request, res:Response) {
        
        res.json({text: 'La api esta en /api/lista'});

    }
}

export const indexcontroller = new IndexControllers();