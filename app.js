const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home-page.html")
    
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about-page.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works-page.html")
})

app.get("/photo", (req, res) => {
    res.sendFile(__dirname + "/views/photo-gallery-pages.html")
})

app.get("*", (req, res) => {
    res.send("This page doesnt exist!")
})

app.listen(port, () => {
    //res.send("intruder")
})