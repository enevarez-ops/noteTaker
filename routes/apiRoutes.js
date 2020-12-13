const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => { 
    fs.readFile("db/db.json", (err, data) => {
        var notes = []
        if (err) console.log(err)
        notes = JSON.parse(data) || []
        res.send(notes)
    })
});

router.post("/notes", (req, res) => {
    let updatedNotes = []
    var {title, text} = req.body
    const newNote = {title, text, id:uuidv4()} 
    fs.readFile("db/db.json", (err, data) => {
        if (err) console.log(err)
        updatedNotes = JSON.parse(data) || []
        updatedNotes.push(newNote)
        fs.writeFile("db/db.json", JSON.stringify(updatedNotes), (err) => {
            if (err) console.log(err)
        }) 
        res.send(updatedNotes)
    })
})

module.exports = router;