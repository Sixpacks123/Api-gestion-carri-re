import {generateToken} from "./authenticate/jwt";

require('dotenv').config();

import cors from 'cors';
import express from 'express';
import {PORT} from './config/constants';
import {mineRouter} from "./routes/mineRouter";
import {concessionsRouter} from "./routes/concessionsRouter";

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

app.get('/concessions/show/:id',concessionsRouter);
app.get('/concessions/show/mines/:id',concessionsRouter);
app.get('/concessions/show/contacts/:id',concessionsRouter);
app.get('/concessions/all/:id',concessionsRouter);



app.post('/concessions/add', concessionsRouter);
app.put('/concessions/update/:id', concessionsRouter);
app.delete('/concessions/delete/:id', concessionsRouter);

if(process.env.NODE_ENV !== 'production'){
    console.log('le token JWT: ',generateToken("aubin", "aub.heurtault@gmail.com","admin"));
}
app.listen(PORT, ()=> {
    console.log(`Server  is listening on port ${PORT}`)
});

