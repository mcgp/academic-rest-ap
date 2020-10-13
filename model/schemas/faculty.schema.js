/**package */
const mongoose = require("mongoose");
/**Schema creator */
const facultySchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
            },
    name:{
        type: "String",
        required: true  
    },
    nameDean:{
        type: "String",
        required: true
    }

});

module.exports = facultySchema;

