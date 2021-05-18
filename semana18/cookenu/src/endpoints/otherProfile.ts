import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, userPersonalInfo } from "../types";

export default async function otherProfile(
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

        const user = await connection('cookenu_users')
            .select('*')
            .where({ id: req.params.id })

        const { id, name, email } = user[0]
        res.send({ id, name, email});

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
        }

        res.send({ message: error.message })
    }
}