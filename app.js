const express = require('express')
const app = express()

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.send('Hello World')
})


app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
})

app.get("/photo_gallery", (req, res) => {
    res.sendFile(__dirname + "/views/photo_gallery.html");
})


app.listen(3000)