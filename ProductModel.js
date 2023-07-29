const mongoose = require("mongoose")

const schema = mongoose.Schema({
    date : Date,
    item : String, 
    location : String
})

module.exports = mongoose.model("Product", productSchema)