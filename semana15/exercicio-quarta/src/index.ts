import express, { Express, Request, Response, response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { countries } from "./countries";

const app: Express = express()
app.use(express.json())
app.use(cors())


// app.get('/countries/all', (req: Request, res: Response) => {
//     const myCountries = countries.map((country) => {
//         return ({
//             id: country.id,
//             name: country.name
//         })
//     })
//     res.status(201).send(myCountries);
// });


app.get('/countries/:id', (req: Request, res: Response) => {
    const result = countries.filter((country) => {
        return country.id === Number(req.params.id);
    })

    if (result) {
        res.status(201).send(result)
    } else {
        res.status(404).send("Not found")
    }
})

// app.get('/countries/search', (req: Request, res: Response) => {
//     let result = countries

//     if (req.query.name) {
//        result = result.filter(
//           country => country.name.includes(req.query.name as string)
//        )
//     }
    
//     if (req.query.capital) {
//        result = result.filter(
//           country => country.capital.includes(req.query.capital as string)
//        )
//     }
    
//     if (req.query.continent) {
//        result = result.filter(
//           country => country.continent.includes(req.query.continent as string)
//        )
//     }
//     if (result.length) {
//         res.status(201).send({result});
//     } else {
//         res.status(404).send("Not Found");
//     }


// });

//4)
app.put("/countries/edit/:id", (req: Request, res: Response) => {
    const myCountries = countries
    myCountries.forEach((country) => {
        if(country.id === Number(req.params.id)){
            country.name = req.body.name
            country.capital = req.body.capital
            console.log(req.body.name)
        } 
    })
    res.status(201).send({myCountries});
    
})

// 5)
app.delete('countries/:id', (req: Request, res: Response) => {
    
})




const server = app.listen(process.env.PORT || 3018, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:3003`)
        
    } else {
        console.error(`Failure upon starting server.`)
    }
})

