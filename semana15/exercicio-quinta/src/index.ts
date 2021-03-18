import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

enum USER_TYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type user = {
    id: number,
    name: string,
    email: string,
    type: USER_TYPE,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USER_TYPE.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USER_TYPE.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: USER_TYPE.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: USER_TYPE.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: USER_TYPE.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_TYPE.ADMIN,
        age: 60
    }
]

// Exercício 1
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const myUsers = users;
        res.status(200).send(myUsers)
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

// Exercício 2
app.get("/users/search", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const typeSearch = req.query.type;
        const myUsers = users;
        const filteredUsers = myUsers.filter((u) => {
            return u.type.includes(typeSearch as string);
        });
        if (filteredUsers.length) {
            res.status(201).send(filteredUsers);
        }
        else {
            res.status(404).send("Not Found");
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

// Exercício 3
app.get("/users/name/search", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const nameSearch = req.query.name;
        const myUsers = users;
        const filteredUsers = myUsers.filter((u) => {
            return u.name.includes(nameSearch as string);
        });
        res.status(201).send(filteredUsers);

        if (filteredUsers) {
            res.status(201).send(filteredUsers);
        }
        else {
            res.status(404).send("Not Found");
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

// Exercício 4


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});