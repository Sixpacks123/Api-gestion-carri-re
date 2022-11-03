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
exports.concessionsRouter = void 0;
const express_1 = __importDefault(require("express"));
const ConcessionsControllers_1 = require("../controllers/ConcessionsControllers");
const Auth = __importStar(require("../middleware/authenticate"));
const concessionsControllers = new ConcessionsControllers_1.ConcessionsControllers();
exports.concessionsRouter = express_1.default.Router({
    strict: true,
});
exports.concessionsRouter.route('/concessions/show/:id').get(concessionsControllers.read);
exports.concessionsRouter.route('/concessions/show/mines/:id').get(concessionsControllers.mines);
exports.concessionsRouter.route('/concessions/show/contacts/:id').get(concessionsControllers.contacts);
exports.concessionsRouter.route('/concessions/all/:id').get(concessionsControllers.all);
exports.concessionsRouter.route('/concessions/add').post(Auth.authorize(['admin']), concessionsControllers.create);
exports.concessionsRouter.route('/concessions/update/:id').put(concessionsControllers.update);
exports.concessionsRouter.route('/concessions/delete/:id').delete(Auth.authorize(['admin']), concessionsControllers.update);
