import { Request, Response } from "express"
import { CrudController } from "./CrudControllers"
import {Concessions} from "../models/Concessions";
import {Adresses} from "../models/Adresses";
import { Mines } from "../models/mines";
import status from 'http-status';
import { Contacts } from "../models/Contacts";
import { stringify } from "querystring";
import { cp } from "fs";

export class ConcessionsControllers extends  CrudController {
    public  async read(req: Request, res: Response): Promise<void> {
        Concessions.findByPk(req.params.id, {include:[Adresses]})
        .then(concessions => res.json(concessions))
        .catch( err => { console.log(err);
            res.json('error')
        })
    }
    public create(req: Request, res: Response): void {
        Concessions.create(req.body)
        .then(concessions =>res.json(concessions))
        .catch(err => {
            res.json({'message':'insertion impossible'})
        })
    }
    public update(req: Request, res: Response): void {
        let id = req.params.id;
        let concessionsUpdate = req.body

        Concessions.findByPk(id)
        .then(concessions =>{
            if(concessions !== null) {
                concessions.set(concessionsUpdate);
                concessions.save();
                res.json({'message':'concessions updated'})
            }else{
                res.json({'message':'concessions not updated'})
            }

        })
        .catch(err => {
            res.json({'message':'modification impossible'})
        });

    }

    public mines(req: Request, res: Response): void {
        Mines.findAll({where: {id_concessions: req.params.id}})
        .then(mines => res.json(mines))
        .catch( err => { console.log(err);
            res.json('error')
        })
    }

    public contacts(req: Request, res: Response): void {
        Contacts.findAll({where: {id_concessions: req.params.id}})
        .then(contact => res.json(contact))
        .catch( err => { console.log(err);
            res.json('error')
        })
    }
    public async all(req: Request, res: Response):  Promise<any> {
        Concessions.findByPk(req.params.id, {include:[Adresses,Contacts,Mines]})
        .then(concessions => res.json(concessions))
        .catch( err => { console.log(err);
            res.json('error')
        })
    }
    public delete(req: Request, res: Response): void {
        Concessions.destroy({where: {id_concessions: req.params.id}})
        Concessions.findByPk(req.params.id, {include:[Adresses]})
        .then( result => {
            res.status(200).json({message:"Deleted successfully"});          
        })
        .catch(function (error){
            res.status(500).json(error);
        });
    }
}
