const usersModel = require('../Models/users_schema_model');
const bcrypt = require('bcryptjs');

class loginService {
    authentication(data) {
        return new Promise((resolve, reject) => {
            usersModel.find({ email: data.email }).then((extracted_row) => {
                
                let pwd = data.password;
                let hash = extracted_row[0].password;

                bcrypt.compare(pwd, hash, function (err, result) {
                    if (result) {
                        console.log("Authenticated user")
                        resolve(1);
                    }
                    else {
                        console.log("Not an Authenticated user");
                        resolve(0);
                    }
                });
            })
        })
    }
}

module.exports = new loginService();