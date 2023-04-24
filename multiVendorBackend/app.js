const express = require("express");
const app = express();

//configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "multiVendorBackend/config/.env",
  });
}

module.exports = app;

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
