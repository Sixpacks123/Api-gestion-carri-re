import { Request, Response } from "express"
import status from 'http-status';
import { CrudController } from "./CrudControllers"
import {Mines} from "../models/mines";
import {Concessions} from "../models/Concessions";

export class MinesControllers extends  CrudController {
    public  async read(req: Request, res: Response): Promise<void> {
        Mines.findByPk(req.params.id, {include: [ Concessions] })
        .then(mines => res.json(mines))
        .catch( err => { console.log(err);
            res.json('error')
        })
    }
    public create(req: Request, res: Response): void {
        Mines.create(req.body)
        .then(mines =>res.json(mines))
        .catch(err => {
            res.json({'message':'insertion impossible'})
        })
    }
    public update(req: Request, res: Response): void {
        let id = req.params.id;
        let minesUpdate = req.body

        Mines.findByPk(id)
        .then(mines =>{
            if(mines !== null) {
                mines.set(minesUpdate);
                mines.save();
                res.json({'message':'mines updated'})
            }else{
                res.json({'message':'mines not updated'})
            }

        })
        .catch(err => {
            res.json({'message':'modification impossible'})
        });

    }

    public delete(req: Request, res: Response): void {
        Mines.destroy({where: {id_mines: req.params.id}})
        .then( result => {
            res.status(200).json({message:"Deleted successfully"});          
        })
        .catch(function (error){
            res.status(500).json(error);
        });
    }
}