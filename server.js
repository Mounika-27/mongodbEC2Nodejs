const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();
const registeruserController = require('./Controllers/registeruserController');
const loginController = require('./Controllers/loginController');
const retrieveController = require('./Controllers/retrieveController');
const updateController = require('./Controllers/updateController');
//const { db } = require('./Models/users_schema_model');

const db=require('./db/dbconn');

app.post('/register',registeruserController.registeruserfun);
app.post('/login',loginController.logging_in);
app.get('/show_allusers',retrieveController.retrieve_allusers);
app.post('/show_user_details',retrieveController.retrievedata);
app.post('/update_user_data/:id',updateController.updatedata);


app.listen(7002,()=>{
    console.log("Server started and running at port number 7002");
    Connect();
})


async function Connect(){

    await db.connectToDB()
    console.log("database creation is done");
}