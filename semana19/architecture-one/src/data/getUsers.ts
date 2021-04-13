import { connection } from "../connection";
import { user } from "../types/user";

export const getUsers = async() => {
  const users: string =  await connection.select("*").from('semana19_users')
   return users
}