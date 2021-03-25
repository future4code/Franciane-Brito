import app from "./app"
import connection from "./connection"

app.post("/actor", async (req, res) => {
    try {
        connection.raw(
            `ÌNSERT INTO Actor(id, name, gender, birth_date, salary)
    VALUES(
        "${Date.now()}",
        "${req.body.name}",
        "${req.body.gender}",
        "${req.body.birth_date}",
        ${req.body.salary},
    )`
        )
        res.status(201).send("Created!")
    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})

app.get("/actor", async (req, res) => {
    try {
        const result = await connection(`Actor`)
        res.status(201).send(result)

    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})

app.put("/actor/:id", async (req, res) => {
    try {
        await connection("Actor")
            .update({
                salary: req.body.salary,
                birth_Date: req.body.birthDate
            })
            .where({
                name: req.params.name
            })
        res.send("Created!")

    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})

// Exercicio 1
app.get("/actor/name", async (req, res) => {
    try {
        const result = await connection.raw(`
              SELECT * FROM Actor WHERE name = "Juliana Paes"
            `)
        
        res.status(200).send(result)
    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})


app.get("/actor/gender-count", async (req, res) => {
    try {
        const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "male"
    `);
    const count = result[0][0];
    res.status(200).send(count)

    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})

// Exercicio 2
app.put("/actor/:id", async (req, res) => {
    try {

        await connection("Actor")
            .update({
                salary: req.body.salary,
            })
            .where({
                name: req.params.name
            })
        res.send("Created!")

    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})

app.post("/actor/delete/:id", async (req, res) => {
    try {
        await connection("Actor")
            .delete()
            .where(
                "id", req.params.id
            )
        res.send("Delete!!!!!")

    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})

app.post("/actor/media/:gender", async (req, res) => {
    try {
       const result = await connection("Actor")
            .avg("salary")
            .where(
                "gender", req.params.gender
            )
        res.send(result)

    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})


// Exercício 3
// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
//       const actor = await getActorById(id);
  
//       res.status(200).send(actor)
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });