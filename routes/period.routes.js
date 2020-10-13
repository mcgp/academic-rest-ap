
const controller = require("../controller/logic/period.controller");

module.exports = (app) => {
    console.log("Loading rourtes of period");
    app.get("/period", (req,res,next) => {
        controller.getAll(req,res,next);
    });

    app.get("/period/bycode/:code", (req,res,next) => {
        console.log("getting period code");
        controller.getByCode(req,res,next);
    });
    
    app.post("/period", (req,res,next) => {
        controller.createPeriod(req,res,next);
    });

    app.put("/period", (req,res,next) => {
        controller.updatePeriod(req,res,next);
    });
    
    app.delete("/period", (req,res,next) => {
        controller.deletePeriod(req,res,next);
    });
    
}