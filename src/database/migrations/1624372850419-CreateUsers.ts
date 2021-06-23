import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624372850419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",//um tipo de id universal, único e representado por 32
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"//tipo uma string
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                    
                ]
            })
        )
    } //criando tabela

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    } //apagando tabela

}
