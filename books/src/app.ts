import express from "express";
import { connectDB } from "./config/db";
import userRouter from './router/user.router'
import bookRouter from './router/book.router'
import loanRouter from './router/loan.router'

const app = express();
const port = 3007;

connectDB();

app.use(express.json());
app.use('/user', userRouter)
app.use('/book', bookRouter)
app.use('/loan', loanRouter)

app.listen(port, ()=> console.log(`I connecting on port (${port}).`) );