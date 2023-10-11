import express from "express"
import bodyParser from "body-parser";

const app = express()
const port = 3000;

let _home = [] // home checklist array
let _work = [] // work checklist array

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home.ejs", {home: _home})
})

app.get("/work", (req, res) =>{
    res.render("work.ejs", {work: _work})
})

app.post("/submit", (req, res) => {
    _home.push(req.body['task'])
    res.render("home.ejs", {home: _home})
})

app.post("/submit-work", (req, res) => {
    _work.push(req.body['task'])
    res.render("work.ejs", {work: _work})
})

app.listen(port, () =>{
    console.log(`Server listening on port ${port}.`)
})