"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mineRouter = void 0;
const express_1 = __importDefault(require("express"));
const MinesControllers_1 = require("../controllers/MinesControllers");
const Auth = __importStar(require("../middleware/authenticate"));
const minesControllers = new MinesControllers_1.MinesControllers();
exports.mineRouter = express_1.default.Router({
    strict: true,
});
exports.mineRouter.route('/mines/show/:id').get(minesControllers.read);
exports.mineRouter.route('/mines/add').post(Auth.authorize(['admin']), minesControllers.create);
exports.mineRouter.route('/mines/update/:id').put(minesControllers.update);
exports.mineRouter.route('/mines/delete/:id').delete(Auth.authorize(['admin']), minesControllers.delete);
