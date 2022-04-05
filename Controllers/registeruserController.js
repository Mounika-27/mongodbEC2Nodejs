const registeruserService = require('../Services/registeruserService');

class registeruserController  // class name and file name need not be same
{
async registeruserfun(req,res)
{
    try
    {
        let result = await registeruserService.registeruserfunction(req.body);  
        if(result)
        res.status(200).json({ message: 'registration succeded' });
    }
    catch(error)
    {
        console.log(error);
        res.status(504).json({ message: 'registration failed' });
    } 
}
}

module.exports = new registeruserController();