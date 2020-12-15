import express from 'express'
import { router } from "./routes"

const app = express () //Cria nosso app

app.use(express.json())
app.use(router)

export { app } //facilita na parte do auto import