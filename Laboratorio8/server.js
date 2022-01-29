const express = require("express")
var path = require("path")

var app = express()
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

var reservations = [
    {
        name: "Constanza",
        phoneNumber : 55388432227,
        email: "constanza@gmail.com",
        id: 001
    },
    {
        name: "Martha",
        phoneNumber : 5512345678,
        email: "martha@gmail.com",
        id: 002
    },
    {
        name: "Chops",
        phoneNumber : 5512345678,
        email: "chops@gmail.com",
        id: 003
    },
    {
        name: "Chris",
        phoneNumber : 5512345678,
        email: "chris@gmail.com",
        id: 004
    }
]

var waitList = [

]

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/api/tables", (req, res) => {
    return res.json(reservations)
})

app.get("/api/waitList", (req, res) => {
    return res.json(waitList)
})

app.post("/api/tables", (req, res) => {
    if(reservations.length<6)
    {
        var newTable = req.body
        console.log(newTable)
        reservations.push(newTable)
        res.json(newTable)
    }
})

app.post("/api/waitList", (req, res) => {
    if(reservations.length==5)
    {
        var newTable = req.body
        console.log(newTable)
        
        waitList.push(newTable)
        res.json(newTable)
    }
})

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT)
})