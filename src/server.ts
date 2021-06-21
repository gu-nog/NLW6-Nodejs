import express, { request, response } from "express"

const app = express();

const porta = 3000

app.get("/teste", (request, response) => {
    return response.send("Olá NLW!!")
})

app.post("/teste-post", (request, response) => {
    return response.send("Olá NLW método post!!!")
}) //Usa o insomnia para testar

app.listen(porta, () => console.log(`Server is running at http://localhost:${porta}`) );
