const usersModel = require('../Models/users_schema_model');
class retrieveService
{
    retrieve(data)
    {
        return new Promise((resolve,reject)=>{
            usersModel.find(data,{password:0}).then((result)=>{
                console.log(result);
                resolve(result);
            })
        })
    }

    retrieveall()
    {
        return new Promise((resolve,reject)=>{
            usersModel.find({},{password:0}).then((result)=>{
                console.log(result);
                resolve(result);
            })
        })
    }
}

module.exports = new retrieveService();