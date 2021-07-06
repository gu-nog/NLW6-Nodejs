import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const { user_id } = request;
    const usersRepositories = getCustomRepository(UsersRepository);
    const { admin } = await usersRepositories.findOne(user_id);

    if(admin){
        return next();
    } // Se a pessoa for admin, constinua

    return response.status(401).json({
        error: "Unathorized",
    }); // 401 indica não autorizado
}
