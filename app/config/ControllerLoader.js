const fs = require("fs");
const path = require("path");

function loadControllers(controllerDir) {
    const controllers = {};
    const controllerFiles = fs.readdirSync(controllerDir);
    controllerFiles.forEach(file => {
        // Check if file is a JavaScript file
        if (file.endsWith(".js")) {
            const Controller = require(path.join(controllerDir, file));
            const controllerInstance = new Controller();
            controllers[file.replace(".js", "")] = controllerInstance;
        }
    });
    return controllers;
}

module.exports = { loadControllers };
