
const controller = require("../controller/logic/user.controller");

module.exports = (app) => {
    console.log("Loading rourtes of user");
    app.get("/user", (req,res,next) => {
        controller.getAll(req,res,next);
    });

    
    app.post("/user", (req,res,next) => {
        controller.login(req,res,next);
    });
    
    
}