const usersModel = require('../Models/users_schema_model');
const encService = require('./encryptionService');


class registration {
  async registeruserfunction(data) {
    console.log("data",data);
    return new Promise(async(resolve, reject) => {
      console.log("inside register service promise");
      let encpwd = await encService.encrypting(data.password);
      console.log("encpwd",encpwd);
      data.password = encpwd;
      const user1 = new usersModel(data)
      console.log("user",user1);
      user1.save()
        .then((User) => {
          console.log("data inserted");
          console.log(User);
          resolve(true);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
    })
  }
}

module.exports = new registration();

