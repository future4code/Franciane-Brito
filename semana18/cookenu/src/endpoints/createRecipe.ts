import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { recipe, authenticationData } from "../types";

export default async function createRecipe(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { title, description } = req.body
        const cratedAt = new Date().toLocaleDateString()

        const token: string = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Unatuthorized");
        }

        if (!title || !description) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'title' e 'description'")
        }

        const id: string = generateId();
        const newRecipe: recipe = { id, title, description, cratedAt }

        await connection('cookenu_recipes')
            .insert(newRecipe)

        res.status(201).send("Receita criada com sucesso!")

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}