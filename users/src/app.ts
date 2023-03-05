import express from "express";
import { connectDB } from "./config/db";
import usersRoute from "./router/users.router"

const app = express();
const port = 3005;

connectDB();
app.use(express.json())
app.use('/users', usersRoute)

app.listen(port, ()=>{
    console.log(`I connecting on port (${port}).`);
});
