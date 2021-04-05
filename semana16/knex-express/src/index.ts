import express from "express"
import knex from "knex"
import dotenv from "dotenv"
import createUser from "./endpoints/createUser"
import app from "./app"
import getUserById from "./endpoints/getUserById"
import editUser from "./endpoints/editUser"
import createTask from "./endpoints/createTask"
import getTaskById from "./endpoints/getTaskById"

dotenv.config()

app.put('/user', createUser)
app.get('/user/:id', getUserById)

app.post('/task', createTask)
app.post('/task/:id', getTaskById) ///
