import express, {Request, Response} from 'express';
import { ConcessionsControllers } from '../controllers/ConcessionsControllers';
import * as Auth    from '../middleware/authenticate';


const concessionsControllers = new ConcessionsControllers();

export const concessionsRouter = express.Router({
    strict: true,
});

concessionsRouter.route('/concessions/show/:id').get(concessionsControllers.read)
concessionsRouter.route('/concessions/show/mines/:id').get(concessionsControllers.mines)
concessionsRouter.route('/concessions/show/contacts/:id').get(concessionsControllers.contacts)
concessionsRouter.route('/concessions/all/:id').get(concessionsControllers.all)

concessionsRouter.route('/concessions/add').post(Auth.authorize(['admin']),concessionsControllers.create)
concessionsRouter.route('/concessions/update/:id').put(concessionsControllers.update)
concessionsRouter.route('/concessions/delete/:id').delete(Auth.authorize(['admin']),concessionsControllers.update)