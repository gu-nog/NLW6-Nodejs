import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){
    // Recuperar o token:
    const authToken = request.headers.authorization;

    // Verificar se o token foi enviado:
    if (!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(" "); // Tira o Bearer do token
    // Verificar se o token é valido e adicionar o id no request
    try{
        const { sub } = verify(token, "3956087ce708d0c8992d63a573bf0d99") as IPayload;
        request.user_id = sub;
        return next();
    }catch(err){
        return response.status(401).end();
    }

}