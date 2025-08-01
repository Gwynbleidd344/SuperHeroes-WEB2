// GET /characters ==> Get all characters
// POST /characters ==> Create a new character
// GET /characters/:id ==> Get a character by ID
// PUT /characters/:id ==> Update a character by ID
// DELETE /characters/:id ==> Delete a character by ID
import express from 'express'
import data from './user.json'

const app = express()
const HOST = "localhost"
const PORT = 8000

app.listen(PORT)
console.log(`Server running at http://${HOST}:${PORT}/`);

app.use(express.json())

app.get("/characters", (req, res) => {
    res.send(data)
})

app.post("/characters", (req, res) => {
    const newCharacter = req.body
    data.characters.push(newCharacter)
    res.status(201).send(data)
})
app.get("/characters/:id", (req, res) => {
    const character = data.characters.find(character => character.id == req.params.id)
    if (character) {
        res.json(character)
    } else {
        res.status(404).send({ error: "Character not found"})
    }
})

app.put("/characters/:id", (req, res) => {
    const character = data.characters.find(character => character.id == req.params.id)
    if (character) {
        character.name = req.body.name
        character.realName = req.body.realName
        character.universe = req.body.universe
        res.json(data)
    } else {
        res.status(404).send({ error: "Character not found"})
    }
})

app.delete("/characters/:id", (req, res) => {
    const character = data.characters.find(character => character.id == req.params.id)
    if (character) {
        data.characters = data.characters.filter(character => character.id != req.params.id)
        res.json(data)
    } else {
        res.status(404).send({ error: "Character not found"})
    }
})
