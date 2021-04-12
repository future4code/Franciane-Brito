import express, {Express} from 'express'
import { signup } from './endepoints/signup'
import {app, server} from "./app"


app.post("/signup", signup)
