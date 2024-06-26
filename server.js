const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");
const nameListsRoutes = require('./routes/nameLists');
const namesRoutes = require('./routes/names');
const outlinesRoutes = require('./routes/outlines');
const plotPointsRoutes = require('./routes/plotPoints');
const storiesRoutes = require('./routes/stories');
const characterRoutes = require('./routes/characters');



//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

  //Using EJS for views
  //app.set("view engine", "ejs");
  //Static Folder
  //app.use(express.static("public"));

//Change for vercel deployment
 app.set("views", __dirname + "/views");
 app.set("view engine", "ejs");
 app.use(express.static(__dirname + "/public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);
app.use("/nameLists", nameListsRoutes);
app.use("/names", namesRoutes);
app.use("/outlines", outlinesRoutes);
app.use("/plotPoints", plotPointsRoutes);
app.use("/stories", storiesRoutes);
app.use("/characters", characterRoutes);










//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
