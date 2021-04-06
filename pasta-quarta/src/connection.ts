import knex from "knex"; //Importar KNEX no projeto
import dotenv from "dotenv"; //

dotenv.config();
/* DB_HOST: 35.226.146.116
DB_USER: franciane-brito
DB_PASS: IiaTYP1UTqm~4TaPmLww
DB_NAME: epps-franciane-brito */
export const connection = knex({
	client: "mysql",
	connection: {
    host: "35.226.146.116",
    user: "franciane-brito",
    password: "IiaTYP1UTqm~4TaPmLww",
    database: "epps-franciane-brito",
    port: 3306,
    multipleStatements: true
  }
});

export default connection