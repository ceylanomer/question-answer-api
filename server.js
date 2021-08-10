const express = require("express")
const dotenv = require("dotenv")


dotenv.config({
    path: "./config/env/config.env"
});

const app = express();

const PORT = process.env.PORT;

app.get("/api/questions", (req, res) => {
    res.send("Questions Home Page")
})

app.get("/api/questions/delete", (req, res) => {
    res.send("Questions Delete Page")
})

app.get("/api/auth", (req, res) => {
    res.send("Questions Home Page")
})

app.get("/api/auth/register", (req, res) => {
    res.send("Questions Delete Page")
})

app.listen(PORT, ()=>{
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
})
