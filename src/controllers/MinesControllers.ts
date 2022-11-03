import { Request, Response } from "express"
import status from 'http-status';
import { CrudController } from "./CrudControllers"
import {Mines} from "../models/mines";

export class MinesControllers extends  CrudController {
    public  async read(req: Request, res: Response): Promise<void> {
        Mines.findByPk(req.params.id)
        .then(mines => res.json(mines))
        .catch( err => { console.log(err);
            res.json('error')
        })
    }
}