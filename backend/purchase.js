const mongoose = require("mongoose");
const purchase = new mongoose.Schema({
    buyer: String,
    name: String,
    price: Number,
    imgLink: String
});

module.exports = mongoose.model("Purchase", purchase);