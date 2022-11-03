import express, {Request, Response} from 'express';
import { MinesControllers } from '../controllers/MinesControllers';
import * as Auth    from '../middleware/authenticate';

const minesControllers = new MinesControllers();

export const mineRouter = express.Router({
    strict: true,
});

mineRouter.route('/mines/show/:id').get(minesControllers.read)
mineRouter.route('/mines/add').post(Auth.authorize(['admin']),minesControllers.create)
mineRouter.route('/mines/update/:id').put(minesControllers.update)
mineRouter.route('/mines/delete/:id').delete(Auth.authorize(['admin']),minesControllers.delete)