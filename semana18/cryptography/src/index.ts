import express from "express";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import editUser from "./endpoints/editUser"


const app = express();

app.use(express.json());
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;


// import express, { Request, Response } from "express";
// import dotenv from "dotenv";
// import { AddressInfo } from "net";
// import knex from "knex";
// // import cors from "cors";

// dotenv.config();

// export const connection = knex({
// 	client: "mysql",
// 	connection: {
//     host: process.env.DB_HOST,
//     port: 3306,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
//   }
// });



// const app = express();

// app.use(express.json());

// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });
