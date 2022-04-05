const mongoose = require('mongoose');

// Create a schema
const schema = mongoose.Schema;

// Create schema for users collection
const usersSchema = new schema(
    {
        name : String,
        email : String,
        password : String,
        age : Number
    },
    //{collection:"users_table"}
);

const mongooseHidden = require("mongoose-hidden")();
usersSchema.set("toJSON",{
    virtuals:true,
});
usersSchema.plugin(mongooseHidden);

const usersModel =  mongoose.model('User',usersSchema);

module.exports = usersModel;