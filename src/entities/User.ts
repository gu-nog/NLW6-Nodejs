import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid" // Versão 4 do uuid, que irá gerar númeos aleatórios como id

@Entity("users")
class User{

    @PrimaryColumn()
    readonly id: string; //O typescript não possui o tipo uuid

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { User }
