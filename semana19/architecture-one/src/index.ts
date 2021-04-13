import express, {Express} from 'express'
import { signup } from './endepoints/signup'
import {app, server} from "./app"
import { login } from './endepoints/login'
import { getAllUsers } from './endepoints/getAllUsers'
import { deleteUser } from './endepoints/deleteUser'


app.post("/signup", signup)
app.post("/login", login)
app.get("/all", getAllUsers)
app.put("/:id", deleteUser)