import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepository)

        const user = await usersRepositories.findOne({email});
        if(!user){
            throw new Error("Email/Password incorrect") //Erro menos específico para dificultar ataques
        } // Verifica se o email está cadastrado

        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        } // Verifica se o hash gerado com a senha enviada bate com a hash da do BD

        const token = sign(
            {email: user.email},
            "3956087ce708d0c8992d63a573bf0d99", //Código gerado em um md5generator
            {
                subject: user.id,
                expiresIn: "1d",
            }
            );
        return token;
    }
}

export { AuthenticateUserService }