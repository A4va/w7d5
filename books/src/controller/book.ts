import { prisma } from "../config/db";
import { Request, Response } from "express";

const add = async (req:Request, res:Response) => {
    try {
        const book = req.body;
        await prisma.book.create({data:book})
        res.json({message:"Book Added !"})
    } catch (err) { console.log(err) }
}

const getAll = async (req:Request, res:Response) => {
    try { res.json(await prisma.book.findMany({})) } 
    catch (err) { console.log(err) }
}

export default {
    add, 
    getAll,
}