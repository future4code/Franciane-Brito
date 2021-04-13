import { Request, Response } from "express"
import { getUsers } from "../data/getUsers"

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        
        if (!req.rawHeaders[1]) {
            throw new Error("É necessario estar logado :(")
        }

       const users = await getUsers()

        res.status(201).send(users)

    } catch (error) {
        res.status(400).send(error.message)
    }
}