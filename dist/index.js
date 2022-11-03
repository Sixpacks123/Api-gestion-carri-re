"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("./authenticate/jwt");
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const mineRouter_1 = require("./routes/mineRouter");
const concessionsRouter_1 = require("./routes/concessionsRouter");
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:8000'];
const options = {
    origin: allowedOrigins
};
app.use(express_1.default.json());
app.get("/", (req, res) => res.send("HELLo"));
app.get('/mines/show/:id', mineRouter_1.mineRouter);
app.post('/mines/add', mineRouter_1.mineRouter);
app.put('/mines/update/:id', mineRouter_1.mineRouter);
app.delete('/mines/delete/:id', mineRouter_1.mineRouter);
app.get('/concessions/show/:id', concessionsRouter_1.concessionsRouter);
app.get('/concessions/show/mines/:id', concessionsRouter_1.concessionsRouter);
app.get('/concessions/show/contacts/:id', concessionsRouter_1.concessionsRouter);
app.get('/concessions/all/:id', concessionsRouter_1.concessionsRouter);
app.post('/concessions/add', concessionsRouter_1.concessionsRouter);
app.put('/concessions/update/:id', concessionsRouter_1.concessionsRouter);
app.delete('/concessions/delete/:id', concessionsRouter_1.concessionsRouter);
if (process.env.NODE_ENV !== 'production') {
    console.log('le token JWT: ', (0, jwt_1.generateToken)("aubin", "aub.heurtault@gmail.com", "admin"));
}
app.listen(constants_1.PORT, () => {
    console.log(`Server  is listening on port ${constants_1.PORT}`);
});
