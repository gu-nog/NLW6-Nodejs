import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepository } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute( {tag_id, user_sender, user_receiver, message} : IComplimentRequest ){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepository);

        if(user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver");
        }

        const userRecieverExists = await usersRepositories.findOne(user_receiver);
        if(!userRecieverExists) {
            throw new Error("User Reciever doesn't exists!");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepositories.save(compliment)

        return compliment;
    }
}

export { CreateComplimentService }