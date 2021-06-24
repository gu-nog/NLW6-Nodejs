import express, {Request, Response, NextFunction} from "express"
import "express-async-errors"
import "reflect-metadata"
import { router } from "./routes";

import "./database"; // Importa automaticamente o index.ts por quê o javascripts quando
// encontra um arq chamado index, ele ja importa ele automaticamente, mesmo se definirmos 
// só a pasta dele.

const app = express();

app.use(express.json()); //avisa o express que estamos usando o formato .json
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof Error){
            return response.status(400).json({
                error: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
);

const porta = 3000

app.listen(porta, () => console.log(`Server is running at http://localhost:${porta}`) );
