const Solicitation = require('../models/Solicitation');

module.exports = {
  async store(req, res) {
    const { title, category, description, status, serviceImage } = req.body;
    const solicitation = await Solicitation.create({
      title,
      category,
      description,
      serviceImage,
      status,
      user: req.params.userId,
      service: req.params.serviceId,
    });
    return res.json(solicitation);
  },
  async index (req, res){
    const solicitation = await Solicitation.find({ user: req.params.userId });
    return res.json(solicitation);

    
  },
  async show(req, res){
    const solicitation = await Solicitation.findById(req.params.solicitationId);
    await solicitation.populate(['user', 'service']).execPopulate();
    solicitation.user.password = undefined;
    return res.json(solicitation);
    
  },
  async destroy(req, res) {
    await Solicitation.findByIdAndDelete(req.params.solicitationId);
    return res.json({ success: 'O produto foi excluído com sucesso!' });
  },
};
