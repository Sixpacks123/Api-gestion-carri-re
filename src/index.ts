require('dotenv').config();

import cors from 'cors';
import express from 'express';
import {PORT} from './config/constants';


const app = express();
const allowedOrigins = ['http://localhost:8000'];
const options : cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(express.json());

app.get("/", (req,res)=> res.send("HELLo"));

//app.get('/mine/show/:id', mineRouter);
//app.post('/mine/add', mineRouter);
//app.put('/mine/update', mineRouter);
//app.delete('/mine/delete', mineRouter);

app.listen(PORT, ()=> {
    console.log(`Server  is listening on port ${PORT}`)
});

