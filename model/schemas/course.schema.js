/**package */
const mongoose = require("mongoose");
/**Schema creator */
const courseSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
            },
    name:{
        type: "String",
        required: true,   
    }

});

module.exports = courseSchema;

