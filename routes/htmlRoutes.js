// const path = require("path");
// //const router = require('express').Router();


// //app.get("/note", (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));
// //app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html"))); 

// module.exports = function(app){
// app.get("/note", (req, res) =>
//   res.sendFile(path.join(__dirname, "../public/notes.html"))
// );
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "../public/index.html"))
// ); 
// };


const path = require("path");
const express = require("express");
const router = express.Router();
// "/notes" responds with the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// All other routes respond with the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = router;