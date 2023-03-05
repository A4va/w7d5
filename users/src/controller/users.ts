import { prisma } from "../config/db";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) =>{
    try{
        const users = await prisma.user.findMany({});
        res.json(users)
    }catch(err){ console.log(err); }
}

const add = async (req: Request, res: Response) =>{
    try{
        const user = req.body
        await prisma.user.create({ data: user })
        res.json({message: 'User Created'})
    }catch(err){ console.log(err); }
}

const getEmail = async (req: Request, res: Response) =>{
    try {
        const email = req.params;
        const user = await prisma.user.findFirst({where: email})
        res.json(user)
    }catch(err){ console.log(err); }
}

const getOlder = async (req: Request, res: Response) =>{
    try {
        const { older } = req.params;
        const user = await prisma.user.findMany({where: {age:{gt: +older}}})
        res.json(user)
    }catch(err){ console.log(err); }
}

const getCount = async (req: Request, res: Response) =>{
    try {
        const role = req.params;
        
        const user = await prisma.user.findMany({select:role})
        res.json(user.length)
    }catch(err){ console.log(err); }
}

const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findFirst({ where:{ username, password }})
        if (!user) {
            res.json({message:"UNCORRECT EMAIL OR PASSWORD, PLEASE TRY AGAIN !"});
        } else {
            res.json(user);
        }
    }catch(err){ console.log(err); }
}

const newPass = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const newPass = req.body
        await prisma.user.update({ where: { id:id }, data: newPass })
        res.json({message: "Password is changed."})
    }catch(err){ console.log(err); }
}

const getYear =async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const { joiningYear } = req.body;
        const user = await prisma.user.findFirst({where: {id, joiningYear}})
        if(!user){
            res.json({message:"FALSE"})
        }else{
            res.json({message:"TRUE"})
        }
        
    }catch(err){ console.log(err); }
}

const getOldest = async (req: Request, res: Response) =>{
    try {
        const { year } = req.params;
        const user = await prisma.user.findMany({where: {joiningYear:{gte: year}}})
        res.json(user)
    }catch(err){ console.log(err); }
}

export default {
    getAll,
    add,
    getEmail,
    getOlder,
    getCount,
    login,
    newPass,
    getYear,
    getOldest,

}