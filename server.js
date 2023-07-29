require('dotenv').config()

const express = require("express")

const app = express()
const PORT = 5001
const mongoose = require("mongoose")
const cors = require("cors")
mongoose.connect(process.env.DB_STRING, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once("open", ()=> console.log('Connected to Database'))

app.use(express.json())
app.use(cors)

//backend routes

app.get("/items", async function (req, res) {

})

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT} `) )