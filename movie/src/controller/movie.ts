import { prisma } from "../config/db";
import { Request, Response } from "express";

const getAll = async (req:Request, res:Response)=>{
    try{
        const movies = await prisma.movie.findMany({});
        res.json(movies)
    }catch(err){
        console.log(err);
    }
}

const add = async (req:Request, res:Response)=>{
    try{
        const movie = req.body;
        await prisma.movie.create({
             data:movie,
            }) 
        res.json({message: "Movie Added"})
    }catch(err){
        console.log(err);
    }

}

const update = async (req:Request, res:Response)=>{
    try{
        const { id } = req.params;
        const movie = req.body;
        const updating = await prisma.movie.update({
            where: { id: id },
            data: movie
        })
        res.json({message: "Movie Updated"})
    }catch(err) { console.log(err); }
}
const remove = async (req:Request, res:Response)=>{
    try{
        const { id } = req.params;
        const remove = await prisma.movie.delete({ where: { id: id } })
        res.json({message: "Movie Deleted"})

    }catch(err) { console.log(err); }
}

const getName = async (req:Request, res:Response)=>{
    try{
        const name = req.params;
        const nameMovie = await prisma.movie.findFirst({ where: name });
        res.json(nameMovie)
    }catch(err){console.log(err)}
}

const getGenre = async (req:Request, res:Response)=>{
    try{
        const genre = req.params;        
        const genreMovie = await prisma.movie.findMany({
            where:  genre
        });
        res.json(genreMovie)
    }catch(err){console.log(err)}
}

const getRate = async (req:Request, res:Response)=>{
    try{
        const { rate } = req.params;
        const rateMovie = await prisma.movie.findMany({ where: { rating: { gt: +rate } } });
        res.json(rateMovie)
    }catch(err){console.log(err)}
}

const removeAll = async (req:Request, res:Response)=>{
    try{
        const movies = await prisma.movie.deleteMany({});
        res.json(movies)
    }catch(err){
        console.log(err);
    }
}

export default{
    getAll,
    add,
    update,
    remove,
    getName,
    getGenre,
    getRate,
    removeAll,
}