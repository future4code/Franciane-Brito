import { Request, Response } from "express"
import { connection } from "../connection"

export const deleteUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        if (!req.params.id) {
            throw new Error("É necessario estar logado :(")
        }

        const id = req.params.id
        await connection("semana19_users") 
            .delete("*")
            .where({ id })

        res.status(201).send("Usuario Deletado")

    } catch (error) {
        res.status(400).send(error.message)
    }
}

