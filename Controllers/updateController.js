const updateService = require('../Services/updateService');

class updateController 
{
    async updatedata(req, res) 
    {
        try
        {
            let updateddata = await updateService.updateuser(req.params.id, req.body);
            res.status(200).json({message:"updated details",updateddata});
        }
        catch (error) 
        {
            console.log(error);
            res.status(304).json({ message: 'Unable to update users data' });
        }
    }
}
module.exports = new updateController();


