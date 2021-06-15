import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import { hash, compare } from "./services/hashManager";
import getAddressInfo from "./services/getAdressInfo"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)

// função CEP recebe o cep e retorna cidade bairro e etc
getAddressInfo("034").then(console.log)

