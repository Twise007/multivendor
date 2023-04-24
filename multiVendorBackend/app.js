const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(express.json())
app.use(cookieParser())
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({extended:true}))

//configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: ".env",
  });
}

//import routes
//const user = require("./controllers/user")

//app.use("/api/v2/user", user)


// this is for error handling 
app.use(ErrorHandler)


module.exports = app;

