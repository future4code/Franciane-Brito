import { Request, Response } from 'express';
import insertUser from "../data/insertUser";
import { generateToken } from '../services/authenticator';
import generateId from '../services/idGenerator';

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.password ||
            !req.body.email
        ) {
            res
                .status(400)
                .send('Preencha os campos "password" e "email"')
        }
        const id: string = generateId()
 
       const newUser = await insertUser(
            id,
            req.body.email,
            req.body.password
        )
        const token: string = generateToken({id})

        res
        .status(200)
        .send({newUser, token})
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}