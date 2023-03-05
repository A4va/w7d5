import express from "express";
import { connectDB } from "./config/db";
import movieRouter from './router/movie.router'

const port = 3009;
const app = express();

app.use(express.json());
connectDB();

app.use("/movies", movieRouter);

app.listen(port, ()=>{
    console.log(`PORT = ${port}`); 
});