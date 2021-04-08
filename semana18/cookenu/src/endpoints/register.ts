import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userRole } from "../types";
import { hash } from "../services/hashManager";

export default async function register(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, password, role } = req.body

      if (!name || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name', 'password' e 'email'")
      }

     /*  if(role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== userRole.NORMAL){
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
      } */

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const cypherText = await hash(password);

      const newUser: user = { id, name, email, password: cypherText}

      await connection('to_do_list_users')
         .insert(newUser)

      const token: string = generateToken({ id, role })

      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}