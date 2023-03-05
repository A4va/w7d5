import { prisma } from "../config/db";
import { Request, Response } from "express";

const add = async (req:Request, res:Response) => {
    try { 
        const { userId, bookId } = req.body
        const existU = await prisma.user.findFirst({where:{ id: userId }})
        const existB = await prisma.book.findFirst({where: { id:bookId }})
        if (!existU && !existB) {
            res.json({message:"User Id Is Invalids !"}) 
        } else {
            await prisma.loan.create({data:req.body})
            res.json({message:"Book Added !"}) 
        }
    }
    catch (err) { console.log(err) }
}

const getAll = async (req:Request, res:Response) => {
    try {res.json(await prisma.loan.findMany({}))}
    catch (err) { console.log(err) }
}

const remove =  async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        res.json(await prisma.loan.delete({where: {id:id}}))
    }
    catch (err) { console.log(err) }
}

const isLoaned = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const loan = await prisma.loan.findFirst({where: {bookId:id}})
        !loan? res.json({message:"Book Id Is Invalids !"}):res.json(await prisma.book.findMany({where: {id:id}}))
    }
    catch (err) { console.log(err) }
}


export default {
    add,
    getAll,
    remove,
    isLoaned,
}

