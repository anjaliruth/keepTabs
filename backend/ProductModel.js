const mongoose = require("mongoose")

const itemSchema =new mongoose.Schema({
    date : Date,
    item : String, 
    location : String
})

module.exports = mongoose.model("Product", itemSchema)