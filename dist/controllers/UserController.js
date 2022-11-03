"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("../authenticate/jwt");
const constants_1 = require("../config/constants");
const permission_1 = require("../models/permission");
const Users_1 = require("../models/Users");
const CrudControllers_1 = require("./CrudControllers");
const http_status_1 = __importDefault(require("http-status"));
class UserController extends CrudControllers_1.CrudController {
    async signin(req, res) {
        let userInfo = req.body;
        userInfo.password = await (0, bcrypt_1.hash)(userInfo.password, constants_1.BCRYPT_ROUND);
        Users_1.Users.create(req.body)
            .then(users => {
            let name = users.lastname;
            let msg = "l'utilisateur  " + name + " a été ajouté";
            res.json({ "message ": msg });
        })
            .catch(err => {
            console.log(err);
            res.json({ 'message': 'insertion impossible' });
        });
    }
    async login(req, res) {
        const mail = req.body.email;
        const plainPassword = req.body.password;
        const user = await Users_1.Users.findOne({ where: { mail: mail } });
        const permisson = await permission_1.Permission.findByPk(user.idPermission);
        if (user == null) {
            res.status(http_status_1.default.UNAUTHORIZED).json({ message: "Invalid user" });
            return;
        }
        const bMacth = await (0, bcrypt_1.compare)(plainPassword, user.password);
        if (!bMacth) {
            res.status(http_status_1.default.UNAUTHORIZED).json({ message: "Invalid credential" });
        }
        res.status(http_status_1.default.OK).json({ 'token': (0, jwt_1.generateToken)(user.lastname, user.mail, permisson.role) });
    }
}
exports.UserController = UserController;
