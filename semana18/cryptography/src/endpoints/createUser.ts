import { Request, Response } from 'express';
import insertUser from "../data/insertUser";
import { generateToken } from '../services/authenticator';
import generateId from '../services/idGenerator';
import { user, userRole } from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        const { password, email, role } = req.body

        if(role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== userRole.NORMAL){
            res.statusCode = 422
            throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
         }

        if (
            !password ||
            !email ||
            !role
        ) {
            res
                .status(400)
                .send('Preencha os campos "password" e "email"')
        }
        const id: string = generateId()
 
       const newUser = await insertUser(
            // id,
            email,
            password
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