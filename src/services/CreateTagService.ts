import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class CreateTagService {
    async execute(name: string){ //Não usamos uma interface por que usamos apenas um parâmetro
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Incorrect name!");
        } // O nome não pode estar vazio
        
        // O findOne faz: SELECT * FROM TAGS WHERE NAME = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        })

        if(tagAlreadyExists) {
            throw new Error("Tag already exists!")
        } // A tag não pode ser repetida

        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag); // Salva a tag

        return tag;
    }
}

export { CreateTagService }
