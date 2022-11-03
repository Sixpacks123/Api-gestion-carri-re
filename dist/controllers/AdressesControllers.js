"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinesControllers = void 0;
const CrudControllers_1 = require("./CrudControllers");
const mines_1 = require("../models/mines");
const Concessions_1 = require("../models/Concessions");
class MinesControllers extends CrudControllers_1.CrudController {
    async read(req, res) {
        mines_1.Mines.findByPk(req.params.id, { include: [Concessions_1.Concessions] })
            .then(mines => res.json(mines))
            .catch(err => {
            console.log(err);
            res.json('error');
        });
    }
    create(req, res) {
        mines_1.Mines.create(req.body)
            .then(mines => res.json(mines))
            .catch(err => {
            res.json({ 'message': 'insertion impossible' });
        });
    }
    update(req, res) {
        let id = req.params.id;
        let minesUpdate = req.body;
        mines_1.Mines.findByPk(id)
            .then(mines => {
            if (mines !== null) {
                mines.set(minesUpdate);
                mines.save();
                res.json({ 'message': 'mines updated' });
            }
            else {
                res.json({ 'message': 'mines not updated' });
            }
        })
            .catch(err => {
            res.json({ 'message': 'modification impossible' });
        });
    }
}
exports.MinesControllers = MinesControllers;
