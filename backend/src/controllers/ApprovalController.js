const Swapping = require('../models/Swapping');

module.exports = {
    async store (req, res){

        const swapping = await Swapping.findById(req.params.swappingId);
      

        swapping.status= true;

        await swapping.save();

        return res.json(swapping);
    }

};