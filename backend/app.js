require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Connecting to MongoDB Atlas
mongoose.connect(process.env.MONGO_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected Successfully!!!");
}).catch((err) => {
    console.log(err);
});

app.get("/", function (req, res) {
    res.send("Hello From Backend!!!");    
});

//Listen command
app.listen(8080, function () {
    console.log("Server started on port 8080");
});