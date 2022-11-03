require('dotenv').config();

import cors from 'cors';
import express from 'express';
import {PORT} from './config/constants';
import {mineRouter} from "./routes/mineRouter";

const app = express();
const allowedOrigins = ['http://localhost:8000'];
const options : cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(express.json());

app.get("/", (req,res)=> res.send("HELLo"));

app.get('/mines/show/:id', mineRouter);
app.post('/mines/add', mineRouter);
app.put('/mines/update/:id', mineRouter);
app.delete('/mines/delete/:id', mineRouter);

app.listen(PORT, ()=> {
    console.log(`Server  is listening on port ${PORT}`)
});

