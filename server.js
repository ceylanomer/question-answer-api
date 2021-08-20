const express = require("express")
const dotenv = require("dotenv")
const connectDatabase = require("./helpers/database/connectDatabase")
const customErrorHandler = require("./middlewares/errors/customErrorHandler")
const routers = require("./routers")

// Environment Variable
dotenv.config({
    path: "./config/env/config.env"
});

//MongoDB Connection
connectDatabase();

const app = express();

const PORT = process.env.PORT;

//Routers Middleware
app.use("/api", routers)
app.use(customErrorHandler);

app.listen(PORT, ()=>{
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
})
