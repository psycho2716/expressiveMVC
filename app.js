// Require DOTENV Module
require('dotenv').config();
// Require Express Module
const express = require("express");
// Require Path module
const path = require("path");
// Listening Port: Default is port 3000 if .env variable is not set
const PORT = process.env.PORT || 3000;
// Body Parser Module
const bodyParser = require("body-parser");
// Require Web.js Route Module and use its routes
const routes = require("./routes/Web");
// Create an Instance of the express module
const app = express();

// Configure body parser middleware to parse urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Define Static folder for assets/files
app.use(express.static(path.join(__dirname, "./assets")));
// Define Templating Engine: EJS
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// Use the routes defined in web.js
app.use(routes);

// Listen for incoming connection
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
