import express, { Express, Request, Response, response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { countries } from "./countries";

const app: Express = express()
app.use(express.json())
app.use(cors())

// 
app.get('/countries/all', (req: Request, res: Response) => {
    const myCountries = countries.map((country) => {
        return ({
            id: country.id,
            name: country.name
        })
    })
    res.status(201).send(myCountries);
});

// 
app.get('/countries/:id', (req: Request, res: Response) => {
    const result = countries.filter((country) => {
        return country.id === Number(req.params.id);
    })

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})

app.get('/countries/search', (req: Request, res: Response) => {

    const country: string = req.query.country as string;
    const myCountries = countries;
    const filteredCountries = countries.filter((ct) => {
        return ct.name.includes("Bra");
    });

    if (filteredCountries.length) {
        res.status(201).send(filteredCountries);
    } else {
        res.status(404).send("Not Found");
    }

    console.log('\u001b[31m',"iae eeeeeeeeeeeeeeeee", filteredCountries);

});

const server = app.listen(process.env.PORT || 3011, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:3000`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

