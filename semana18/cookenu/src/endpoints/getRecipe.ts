import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function getRecipe(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token: string = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Unatuthorized");
        }

        const user = await connection('cookenu_recipes')
            .select('*')
            .where({ id: req.params.id })

        const { data, title, description, cratedAt } = user[0]
        res.status(201).send({ data, title, description, cratedAt });

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
        }

        res.send({ message: error.message })
    }
}