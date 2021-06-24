import { Request, Response, NextFunction } from "express"

export function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const admin = true;

    if(admin){
        return next();
    } // Se a pessoa for admin, constinua

    return response.status(401).json({
        error: "Unathorized",
    }); // 401 indica não autorizado
}
