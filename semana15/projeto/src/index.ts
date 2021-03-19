import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

type extratoBancario = {
    valorTransacao: number,
    data: string | number,
    descricao: string
}

type user = {
    name: string,
    CPF: string,
    birthDate: string | number,
    balance: number,
    extrato: [extratoBancario]
}

// variaveis data 
let data = new Date();
let currentYear = data.getFullYear()
let mes = Number(data.getMonth()) + 1
let dia = data.getDate()

let accounts: user[] = [
    {
        name: "Carla",
        CPF: "123.456.789-10",
        birthDate: "01/01/2001",
        balance: 700,
        extrato: [{
            valorTransacao: 1000,
            data: "23/06/2005",
            descricao: "Padaria do divino"
        }]
    },
    {
        name: "Bruno",
        CPF: "11111111111",
        birthDate: "02/04/2001",
        balance: 356,
        extrato: [{ valorTransacao: 200, data: "24/06/2007", descricao: "Farmacia esperança" }]
    }
]

// Mostrar contas

app.get("/accounts", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const mycounts = accounts;

        res.status(200).send(accounts)
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

// Criar Conta
app.post("/accounts/cadastro", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {

        let anoNascimento = req.body.birthDate.substr(6, 4)
        let idade = Number(currentYear) - Number(anoNascimento)

        if (idade >= 18) {
            const reqBody: user = {
                name: req.body.name,
                CPF: req.body.CPF,
                birthDate: req.body.birthDate,
                balance: 0,
                extrato: req.body.extrato
            };

            if (!reqBody.birthDate || !reqBody.CPF || !reqBody.name) {
                errorCode = 422;
                throw new Error("Please check the fields.")
            }

            accounts.map((conta) => {
                if (conta.CPF.includes(reqBody.CPF)) {
                    errorCode = 422;
                    throw new Error("Numero CPF já cadastro")
                }
            })

            accounts.push(reqBody);
            res.status(201).send({ message: "User created successfully" })

        } else {
            res.status(errorCode).send("É preciso ser maior de 18 anos para criar uma conta. :)");
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message });

    }
})

// Consulta de valorTransacao por CPF

app.get("/accounts/:CPF", (req: Request, res: Response) => {
    let errorCode: number = 400;
    let teste = {}
    try {
        accounts.map((conta) => {

            if (conta.CPF === req.params.CPF) {
                console.log(conta.balance)
                errorCode = 200
                teste = { balance: conta.balance }
            }

        })

        if (errorCode !== 200) {
            res.status(errorCode).send("CPF não encontrado! :(");

        } else {

            res.status(errorCode).send(teste)
        }
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

// Adicionar valorTransacao a conta 
app.put("/accounts/adit/search", (req: Request, res: Response) => {
    let errorCode: number = 400;
    let result: user[] = accounts
    try {
        if (!req.query.name && !req.query.CPF && !req.query.valor) {

            throw new Error("invalid parameters")
        }
        if (req.query.name) {
            result = result.filter((conta) => {
                return conta.name === req.query.name
            })
        }
        if (req.query.CPF) {
            result = result.filter((conta) => {
                return conta.CPF === req.query.CPF
            })
        }
        if (result.length) {
            accounts.filter((conta) => {
                if (conta === result[0]) {
                    let dataExtrato = `${currentYear}/${mes}/${dia}`
                    conta.balance += Number(req.query.valor)
                    conta.extrato.push({
                        valorTransacao: Number(req.query.valor),
                        data: dataExtrato,
                        descricao: "Depósito de dinheiro"
                    });
                }
            })

        } else {
            res.status(400).send("Usuario não encontrado :(")
        }
        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});