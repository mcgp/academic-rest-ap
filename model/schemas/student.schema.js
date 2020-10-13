/**package */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**Schema creator */
const studentSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true,
        
    },
    lastname:{
        type: "String",
        required: true,
    },
    email:{
        type: "String",
        required: true,
        unique: true
    },
    phone:{
        type: "String",
        required: true,
    },
    programId:{
        type: "String",
        required: true,
    }

});

/** schema exportation */
studentSchema.plugin(validator);
module.exports = studentSchema;

