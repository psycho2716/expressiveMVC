/*
    This script initializes and configures routes for the application.
*/

// Require the Router module for handling routes
const router = require("../app/routes/Router");
const path = require("path"); // Import the path module

// Require ControllerLoader module
const { loadControllers } = require("../app/config/ControllerLoader");

// Define the directory where controllers are located
const controllerDir = path.join(__dirname, "../app/Controllers/");

// Get or Load all Controller dynamically
const controllers = loadControllers(controllerDir);

//? Define Controllers here...
const MainController = controllers["MainController"];

//? Define Routes here...
router.method("get").route("/", MainController.home).name("home");

// Export the router's express app
module.exports = router.getApp();

