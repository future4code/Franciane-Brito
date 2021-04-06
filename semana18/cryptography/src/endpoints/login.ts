import { Request, Response } from 'express';
import connection from '../connection';
import { generateToken } from '../services/authenticator';
import { userCredencial, userPersonalInfo } from '../types';

export default async function login(
    req: Request,
    res: Response
) {
    try {

        const { email, password }: userCredencial = req.body

        if (
            !password ||
            !email
        ) {
            res
                .status(422)
                .send('Preencha os campos "password" e "email"')
        }


      const [user] = await connection("User")
        .where({ email })

        if(!user || user.password !== password) {
            res
            .status(401)
            .send("Credenciais inválidas")
        }

        const token:string = generateToken({id: user.id})

        res.status(201).send({token})

    } catch (error) {
        if(res.statusCode == 200) {
            res.status(500).send("Internal serer error")
        } else {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }
        
    }
}