const Swapping = require('../models/Swapping');

module.exports = {
  async store(req, res) {
    
    const { title, category, description, status, serviceImage } = req.body;
    const swapping = await Swapping.create({
      serviceImage,
      title,
      category,
      description,
      status,
      user: req.params.userId,
      service: req.params.serviceId,
    });
    return res.json(swapping);
},
  async index (req, res){
    const swapping = await Swapping.find({ user: req.params.userId });
    return res.json(swapping);

    
  },
  async show(req, res){
    const swapping = await Swapping.findById(req.params.swappingId);
    await swapping.populate(['user', 'service']).execPopulate();
    swapping.user.password = undefined;
    return res.json(swapping);
    
  },
  async destroy(req, res) {
    await Swapping.findByIdAndDelete(req.params.swappingId);
    return res.json({ success: 'O produto foi excluído com sucesso!' });
  },
};
