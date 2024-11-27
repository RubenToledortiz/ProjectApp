import { Request, Response} from 'express'


import pooldb from '../database'

class ListControllers {


    public async list(req: Request, res:Response) {
     const comida =  await pooldb.query('SELECT * FROM lista')
    res.json(comida)
    }

    public async getOne(req: Request, res:Response){
        const { id } = req.params
        const listado =  await  pooldb.query('SELECT * FROM lista WHERE id = ?', [id]);
        if (listado.length > 0){
            return res.json(listado[0]);
        }
        res.status(404).json({text: "El item no existe"})

    }

    public  async create(req: Request, res:Response){
       await pooldb.query('INSERT INTO lista set ?', [req.body])
        res.json({message: 'compra guardada'})
    }

    public async delete(req: Request, res:Response){
        const { id } = req.params
        await  pooldb.query('DELETE FROM lista where id = ?', [id]);
        res.json({message: "compra eliminada"})
    }

    public async update(req: Request, res:Response){
        const { id } = req.params
        await  pooldb.query('UPDATE lista set ? where id = ?', [req.body,id]);
        res.json({message: "compra actualizada"})
    }
}

const listController = new ListControllers();
export default listController;