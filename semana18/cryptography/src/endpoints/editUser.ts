import { Request, Response } from 'express';
import connection from '../connection';
import { getTokenData } from '../services/authenticator';
import { authenticationData, userCredencial } from '../types';

export default async function editUser(
    req: Request,
    res: Response
) {
    try {

        const { email, password }: userCredencial = req.body
        const token = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Confira o cabeçalho autorizathion da sua autentificação.")
        }

        await connection("User")
            .update({ email, password })
            .where({ id: tokenData.id })

        res.status(201).send({ token })

    } catch (error) {

        if (res.statusCode == 200) {
            res.status(500).send("Internal serer error")
        } else {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }

    }
}