/** packages */
const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-connections.mongodb");

const connStr = 'mongodb+srv://acad_rest_api_user:ANEDSHuHc85x0VMY@cluster0.ajlxn.mongodb.net/test?retryWrites=true';

module.exports = () => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () => {
        console.log("mongodb server connectd");
    });

    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconnectd");
    });

    mongoose.connection.on("error", () => {
        console.log("mongodb server connectd error");
    });

    mongoose.connection.on("SIGIN", () => {
        mongoose.connection.close(() =>{
        console.log("mongodb server shutting down");
        });
    });





};

