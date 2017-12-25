// dependecies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
// models
const Note = require("./models/Note.js");
const Article = require("./models/Article.js");
// scrapping
const request = require("request");
const cheerio = require("cheerio");
mongoose.Promise = Promise;

const PORT = process.env.PORT || 8080;

// express
const app = express();

// morgan & body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// static content
app.use(express.static("public"));

// handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
const routes = require("./controllers/scraper_controller.js");

app.use("/", routes);

mongoose.connect("mongodb://heroku_gnzk5747:4d2121nhgnfbdl1pfirsdepk9n@ds125262.mlab.com:25262/heroku_gnzk5747");

const db = mongoose.connection;

// errors
db.on("error", function(error) {
  console.log("error: ", error);
});

// 
db.once("open", function() {
  console.log("connected!");
});

// app listening port 8080
app.listen(PORT, function() {
  console.log("App running on PORT " + PORT);
});
