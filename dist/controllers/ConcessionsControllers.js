"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionsControllers = void 0;
const CrudControllers_1 = require("./CrudControllers");
const Concessions_1 = require("../models/Concessions");
const Adresses_1 = require("../models/Adresses");
const mines_1 = require("../models/mines");
const Contacts_1 = require("../models/Contacts");
class ConcessionsControllers extends CrudControllers_1.CrudController {
    async read(req, res) {
        Concessions_1.Concessions.findByPk(req.params.id, { include: [Adresses_1.Adresses] })
            .then(concessions => res.json(concessions))
            .catch(err => {
            console.log(err);
            res.json('error');
        });
    }
    create(req, res) {
        Concessions_1.Concessions.create(req.body)
            .then(concessions => res.json(concessions))
            .catch(err => {
            res.json({ 'message': 'insertion impossible' });
        });
    }
    update(req, res) {
        let id = req.params.id;
        let concessionsUpdate = req.body;
        Concessions_1.Concessions.findByPk(id)
            .then(concessions => {
            if (concessions !== null) {
                concessions.set(concessionsUpdate);
                concessions.save();
                res.json({ 'message': 'concessions updated' });
            }
            else {
                res.json({ 'message': 'concessions not updated' });
            }
        })
            .catch(err => {
            res.json({ 'message': 'modification impossible' });
        });
    }
    mines(req, res) {
        mines_1.Mines.findAll({ where: { id_concessions: req.params.id } })
            .then(mines => res.json(mines))
            .catch(err => {
            console.log(err);
            res.json('error');
        });
    }
    contacts(req, res) {
        Contacts_1.Contacts.findAll({ where: { id_concessions: req.params.id } })
            .then(contact => res.json(contact))
            .catch(err => {
            console.log(err);
            res.json('error');
        });
    }
    async all(req, res) {
        Concessions_1.Concessions.findByPk(req.params.id, { include: [Adresses_1.Adresses, Contacts_1.Contacts, mines_1.Mines] })
            .then(concessions => res.json(concessions))
            .catch(err => {
            console.log(err);
            res.json('error');
        });
    }
    delete(req, res) {
        Concessions_1.Concessions.destroy({ where: { id_concessions: req.params.id } });
        Concessions_1.Concessions.findByPk(req.params.id, { include: [Adresses_1.Adresses] })
            .then(result => {
            res.status(200).json({ message: "Deleted successfully" });
        })
            .catch(function (error) {
            res.status(500).json(error);
        });
    }
}
exports.ConcessionsControllers = ConcessionsControllers;
