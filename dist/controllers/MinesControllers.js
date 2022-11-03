"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinesControllers = void 0;
const CrudControllers_1 = require("./CrudControllers");
const mines_1 = require("../models/mines");
class MinesControllers extends CrudControllers_1.CrudController {
    async read(req, res) {
        mines_1.Mines.findByPk(req.params.id)
            .then(mines => res.json(mines))
            .catch(err => {
            console.log(err);
            res.json('error');
        });
    }
}
exports.MinesControllers = MinesControllers;
