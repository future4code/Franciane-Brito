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
// RAW
    //     const result = await connection.raw(`
    //  SELECT * FROM Actor;
    //  `)

// QUERY BUILD
    const result = await connection("Actor")
        res.send(result)

    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})

app.put("/actor/:id", async (req, res) => {
    try {

        await connection("Actor")
        .update({
            name: req.body.name,
            salary: req.body.salary,
            birth_Date: req.body.birthDate
        })
        .where({
            id: req.params.id
        })
        res.send("Created!")
        
    } catch (error) {
        console.log(error.mensage)
        res.status(500).send("Internal server error")
    }
})


