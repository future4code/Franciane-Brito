import connection from "../connection"
import { generateToken } from "../services/authenticator"

export default async function insertUser(
    id: string,
    email: string,
    password: string
) { 

   await connection.insert({
        id,
        email,
        password
    }).into('User')
     
    const newUser = {
        id: id,
        email: email,
        password: password
    }

    return newUser
}