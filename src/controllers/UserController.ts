import { hashSync,hash ,compare} from "bcrypt"
import { Request, Response } from "express"
import { userInfo } from "os"
import { generateToken } from "../authenticate/jwt"
import { BCRYPT_ROUND } from "../config/constants"
import { Permission } from "../models/permission"
import { Users } from "../models/Users"
import { CrudController } from "./CrudControllers"
import status from 'http-status';


export class UserController extends CrudController{
    public async signin (req: Request, res: Response): Promise<void> {
        let userInfo = req.body
        userInfo.password = await hash(userInfo.password, BCRYPT_ROUND);
        Users.create(req.body)
        .then(users =>{
          let name = users.lastname;
          let msg = "l'utilisateur  "+name+" a été ajouté";
          res.json({"message ": msg})})
        .catch(err => {
          console.log(err);    
          res.json({'message':'insertion impossible'})
        })
      }

    public async login(req: Request, res: Response): Promise<any> {
      const mail = req.body.email;
      const plainPassword = req.body.password;
      const user = await Users.findOne({ where: { mail:mail } });
      const permisson = await Permission.findByPk(user!.idPermission);

      if (user == null) {
        res.status(status.UNAUTHORIZED).json({ message  : "Invalid user" }); 
        return; 
      }
      const bMacth = await compare(plainPassword, user!.password);
      if (!bMacth) {
        res.status(status.UNAUTHORIZED).json({ message  : "Invalid credential" });
    }
    res.status(status.OK).json({'token' : generateToken(user!.lastname, user!.mail, permisson!.role)});
    }
}