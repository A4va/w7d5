import { prisma } from "../config/db";
import { Request, Response } from "express";

const add = async (req:Request, res:Response) =>{
    try {
        const user = req.body;
        await prisma.user.create({ data: user })
        res.json({message:"User Created !"})
    } catch (err) { console.log(err) }
}

const getAll = async (req:Request, res:Response) =>{
    try {
        const users = await prisma.user.findMany({})
        res.json(users)
    } catch (err) { console.log(err) }
}

export default {
    add, 
    getAll,
}