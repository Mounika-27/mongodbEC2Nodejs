const usersModel = require("../Models/users_schema_model");

class updateService
{
    updateuser(email,data)
    {
        return new Promise((resolve,reject)=>{
            console.log(email);
            console.log(data);
            // let key = Object.keys(data)[0]
            if('password' in data || 'email' in data )
            {
            delete data.password
            delete data.email
            }
            let filter = {email:email};
            usersModel.findOneAndUpdate(filter,data,{new:true}).then((result)=>{
                console.log(result);
                resolve(result);
            })
        })
    }
}

module.exports = new updateService();