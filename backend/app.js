require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./user");
const Item = require("./item");
const Purchase = require("./purchase");

const app = express();

// Connecting to MongoDB Atlas
mongoose.connect(process.env.MONGO_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected Successfully!!!");
}).catch((err) => {
    console.log(err);
});

// Middleware---------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


// Routes ----------------------------------------------------------------
app.get("/", function (req, res) {
    res.send("Hello From Backend!!!");    
});

app.get("/home", (req, res) => {
  Item.find({ status: "Unsold" }, (err, items) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else
      res.send(items);
  });
});

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
});
  
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
            if (err) throw err;
            res.send(req.user.username);
            console.log("Successfully Authenticated");
        });
      }
    })(req, res, next);
});
  
app.get("/logout", (req, res) => {
    req.logOut();
    res.send("User Logged Out");
    // res.redirect("/");
})

app.get("/forsale", (req, res) => { 
  const uname = req.query.username;

  Item.find({ username: uname }, (err, items) => {
    if (err)
      console.log(err);
    else {
      res.send(items);
    }
  });
});

app.post("/additem", (req, res) => {
  const item = new Item({
    username: req.body.username,
    name: req.body.name,
    price: req.body.price,
    imgLink: req.body.imgLink,
    status: "Unsold"
  });  

  Item.create(item, (err, result) => {
    if (err)
      console.log(err);
    else {
      res.send(result);
    }
  });
});

app.get("/purchaseList", (req, res) => {
  const bname = req.query.username;

  Purchase.find({ buyer: bname }, (err, items) => {
    if (err)
      console.log(err);
    else 
      res.send(items);
  });
});

app.post("/purchase", (req, res) => {
  const purchase = new Purchase({
    buyer: req.body.buyer,
    name: req.body.name,
    price: req.body.price,
    imgLink: req.body.imgLink
  });

  Purchase.create(purchase, (err, result) => {
    if (err)
      console.log(err);
    else {
      Item.findOneAndUpdate(
        { name: purchase.name },
        { $set: { status: "Sold" } },
        (err, resultt) => {
          if (err)
            res.send(err)
          else
            res.send(resultt);
      });
    }
    
  });
  
});


//Listen command--------------------------------------------------------------
app.listen(8080, function () {
    console.log("Server started on port 8080");
});