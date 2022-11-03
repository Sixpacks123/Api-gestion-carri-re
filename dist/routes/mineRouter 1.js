"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mineRouter = void 0;
const express_1 = __importDefault(require("express"));
const MinesControllers_1 = require("../controllers/MinesControllers");
const minesControllers = new MinesControllers_1.MinesControllers();
exports.mineRouter = express_1.default.Router({
    strict: true,
});
exports.mineRouter.route('/mines/show/:id').get(minesControllers.read);
exports.mineRouter.route('/mines/add').post(minesControllers.create);
exports.mineRouter.route('/mines/update/:id').put(minesControllers.update);
exports.mineRouter.route('/mines/delete/:id').delete(minesControllers.update);
