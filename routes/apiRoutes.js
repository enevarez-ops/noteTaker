const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => { 
    fs.readFile("../db/db.json", (err, data) => {
        var notes = []
        if (err) console.log(err)
        notes = JSON.parse(data) || []
        res.send(notes)
    })
});

module.exports = router;