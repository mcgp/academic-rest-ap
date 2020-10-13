/**package */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**Schema creator */
const programSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        
    },
    name:{
        type: "String",
        required: true,
    },
    nameDirector:{
        type: "String",
        required: true
    },
    idF:{
        type: "Number",
        required: true,
    }

});

/** schema exportation */
module.exports = programSchema;

