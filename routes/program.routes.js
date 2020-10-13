
const controller = require("../controller/logic/program.controller");

module.exports = (app) => {
    console.log("Loading rourtes of program");
    app.get("/program", (req,res,next) => {
        controller.getAll(req,res,next);
    });

    app.get("/program/bycode/:code", (req,res,next) => {
        console.log("getting program code");
        controller.getByCode(req,res,next);
    });
    
    app.post("/program", (req,res,next) => {
        controller.createProgram(req,res,next);
    });

    
}