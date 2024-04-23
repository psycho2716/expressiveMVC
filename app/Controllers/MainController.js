// const connection = require("../config/Database");

class MainController {
    home(req, res) {
        res.render("index");
    }
}

module.exports = MainController;
