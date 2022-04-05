const mongoose = require('mongoose');
class DatabaseConnection {
    async connectToDB() {
        try {
            const MONGO_URI = `mongodb+srv://Mounika4:Mounika4@cluster0.eeg3w.mongodb.net/new`
            //await mongoose.connect('mongodb://localhost/my_database');
            await mongoose.connect(MONGO_URI);
            // await mongoose.connect(MONGO_URI, {
            //     useNewURLParser: true,
            //     useUnifiedTopology: true,
            //     useCreateIndex: true,
            //     useFindAndModify: false
            //     //console.log(`Mongodb Connected: ${conn.connection.host}`);
            // });
            //console.log(`Mongodb Connected: ${conn.connection.host}`);
            console.log("database Connected");
            //MONGO_URI=mongodb+srv://Mounika4:Mounika4@cluster0.eeg3w.mongodb.net/new1
        } catch (err) {
            console.log(err);
            //process.exit();
        }
    }
}
module.exports = new DatabaseConnection();



// const mongoose = require('mongoose');

//Create db url
//var dbURL = "mongodb://localhost:27017/usersdb";
//Connect to database
//var conn = mongoose.createConnection(dbURL);

// mongoose.connect("mongodb://localhost:27017/usersdb").then(()=>{
//     console.log('connection success');
// }).catch((error)=>{
//     console.log('not connected',error);
// })

