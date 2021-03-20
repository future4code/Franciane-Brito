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
        CPF: "12345678910",
        birthDate: "20010101",
        balance: 700,
        extrato: [{
            valorTransacao: 300,
            data: "20051221",
            descricao: "Padaria do divino"
        }]
    },
    {
        name: "Bruno",
        CPF: "11111111111",
        birthDate: "20010202",
        balance: 1356,
        extrato: [{ valorTransacao: 200, data: "20070723", descricao: "Depósito de dinheiro" }]
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

// Consulta de valor por CPF
app.get("/accounts/:CPF", (req: Request, res: Response) => {
    let errorCode: number = 400;
    let teste = {}
    try {
        accounts.map((conta) => {
            if (conta.CPF === req.params.CPF) {
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

// Adicionar valor a conta 
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
                    let dataExtrato = `${currentYear}0${mes}`
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

// PAGAR CONTA
app.post("/accounts/pagar-conta", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        let dataExtrato = `${currentYear}0${mes}${dia}`
        let dataPagarConta = req.body.data

        if (Number(req.body.data) < Number(dataExtrato)) {
            errorCode = 422;
            throw new Error("Insira uma data válida.")
        }

        if (!dataPagarConta) {
            dataPagarConta = dataExtrato
        }

        const body = {
            CPF: req.body.CPF,
            dataPagarConta: dataPagarConta,
            descricao: req.body.descricao,
            valor: req.body.valor
        }

        if (!body.CPF || !body.descricao || !body.valor) {
            errorCode = 422;
            throw new Error("Please check the fields.")
        }

        accounts.map((conta) => {

            if (conta.CPF === body.CPF) {
                errorCode = 200

                if (Number(req.body.valor) > Number(conta.balance)) {
                    errorCode = 422;
                    throw new Error("Seu saldo é insuficiente.")
                }

                conta.extrato.push({
                    valorTransacao: body.valor,
                    data: body.dataPagarConta,
                    descricao: body.descricao
                });
            }
        })

        res.status(200).send(accounts)

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

// ATUALIZAR SALDO DA CONTA 
app.put("/accounts/atualizar-saldo/:CPF", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        let dataExtrato = `${currentYear}0${mes}${dia}`
        accounts.map((conta) => {
            if (conta.CPF === req.params.CPF) {
                conta.extrato.filter((pc) => {
                    if (Number(pc.data) <= Number(dataExtrato) && pc.descricao !== "Depósito de dinheiro" && pc.descricao !== "Transferencia recebida") {
                        conta.balance -= Number(pc.valorTransacao)

                    }
                    if (Number(pc.data) <= Number(dataExtrato) && pc.descricao === "Transferencia recebida") {
                        conta.balance += Number(pc.valorTransacao)

                    }
                })
            }
        })
        res.status(200).send("Saldo atualizado")
    } catch (error) {
        res.status(errorCode).send({ message: error.message });

    }
})

// Transferência Interna
app.post("/accounts/transferencia-interna", (req: Request, res: Response) => {
    let errorCode: number = 400;
    let result: user[] = accounts
    let dataExtrato = `${currentYear}0${mes}${dia}`

    try {

        const body = {
            nome: req.body.nome,
            CPF: req.body.CPF,
            destinario: req.body.destinario,
            cpfDestinatario: req.body.cpfDestinatario,
            valor: req.body.valor
        }

        if (!body.nome || !body.CPF || !body.destinario || !body.cpfDestinatario || !body.valor) {
            throw new Error("invalid parameters")
        }
        // criar conta a pagar

        accounts.map((conta) => {

            if (conta.CPF === body.CPF && conta.name === body.nome) {
                errorCode = 200

                if (Number(body.valor) > Number(conta.balance)) {
                    errorCode = 422;
                    throw new Error("Seu saldo é insuficiente.")
                }

                conta.extrato.push({
                    valorTransacao: Number(body.valor),
                    data: dataExtrato,
                    descricao: "Transferência enviada"
                });

            }

        })
        if (errorCode !== 200) {
            res.status(400).send("Usuario não encontrado :(")
        }

        if (body.destinario) {
            result = result.filter((conta) => {
                return conta.name === body.destinario
            })
        }
        if (body.cpfDestinatario) {
            result = result.filter((conta) => {
                return conta.CPF === body.cpfDestinatario
            })
        }
        if (result.length) {
            accounts.filter((conta) => {
                if (conta === result[0]) {
                    let dataExtrato = `${currentYear}0${mes}${dia}`
                    conta.extrato.push({
                        valorTransacao: Number(body.valor),
                        data: dataExtrato,
                        descricao: "Transferencia recebida"
                    });
                }
            })

        } else {
            res.status(400).send("Destinatario não encontrado :(")
        }
        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
    } else {
        console.error(`Failure upon starting server.`);
    }
});