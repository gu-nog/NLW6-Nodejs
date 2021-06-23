import express from "express"
import "reflect-metadata"
import { router } from "./routes";

import "./database"; // Importa automaticamente o index.ts por quê o javascripts quando
// encontra um arq chamado index, ele ja importa ele automaticamente, mesmo se definirmos 
// só a pasta dele.

const app = express();

app.use(express.json()); //avisa o express que estamos usando o formato .json
app.use(router);

const porta = 3000

app.listen(porta, () => console.log(`Server is running at http://localhost:${porta}`) );
