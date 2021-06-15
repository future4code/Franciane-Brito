import knex from 'knex'
import { config } from 'dotenv'

config()

export interface User {
	name: string
	balance: number
}

export const performPurchase = (user: User, value: number): User | undefined => {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}


export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: 3306,
        multipleStatements: true

    }
});