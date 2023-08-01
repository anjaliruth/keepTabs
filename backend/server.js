require('dotenv').config()
const Product = require("./ProductModel.js")
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
app.use(cors())

//backend routes

app.get("/items", async function (req, res) {
try {
    const products = await Product.find()
    console.log("Products:", products)
    res.json(products)
}
catch (err) {
    
    console.error("Error", err);
    res.status(500).json({message: err.message})

}
})

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT} `) )