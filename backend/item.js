const mongoose = require("mongoose");
const item = new mongoose.Schema({
    username: String,
    name: String,
    price: Number,
    imgLink: String,
    status: String
});

module.exports = mongoose.model("Item", item);