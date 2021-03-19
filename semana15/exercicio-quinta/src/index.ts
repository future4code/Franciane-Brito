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

const myUsers = users


// Exercício 1
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        
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
        
        const filteredUsers = myUsers.filter((u) => {
            u.name.includes(nameSearch as string);
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

// Exercício 4
app.put("/users/add-user", (req: Request, res: Response) => {

    let errorCode: number = 400;

    try {

        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if (!reqBody.age ||
            !reqBody.email ||
            !reqBody.id ||
            !reqBody.name ||
            !reqBody.type) {
            errorCode = 422;
            throw new Error("Please check the fields.")
        }

        users.push(reqBody);
        res.status(201).send({ message: "User created successfully" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }

});

// Exercício 5 e 6
app.put("/users/edit/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
    myUsers.forEach((u) => {
        if (u.id === Number(req.params.id)) {
            if (u.name.includes("ALTERADO" as string)) {
                u.name = req.body.name + "-REALTERADO"
                res.status(201).send();
            } else {
                u.name = req.body.name + "-ALTERADO"
                res.status(201).send();
            }
        } 
    })
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
})

// Exercício 7
app.delete("/users/remove/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
    myUsers.forEach((u) => {
        
        if (u.id === Number(req.params.id)) {
            let index = myUsers.indexOf(u);
            myUsers.splice(index, 1)

            res.status(201).send();
        } 
    })
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