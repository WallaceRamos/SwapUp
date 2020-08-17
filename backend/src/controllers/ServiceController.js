const Service = require('../models/Service');

module.exports = {

  async store(req, res) {
    const { filename } = req.file;
    const { title, category, description } = req.body;
    const service = await Service.create({
      serviceImage: filename,
      title,
      category,
      description,
      user: req.params.userId,
    });
    return res.json(service);
  },
  async index(req, res) {
    const services = await Service.find({ user: req.params.userId });
    return res.json(services);
  },
  async show(req, res) {
    const service = await Service.findById(req.params.serviceId);
    return res.json(service);
  },
  async update(req, res) {
    const { filename } = req.file;
    const { title, category, description } = req.body;
    const service = await Service.findByIdAndUpdate(req.params.serviceId, {
      serviceImage: filename,
      title,
      category,
      description,
    }, { new: true });
    return res.json(service);
  },
  async destroy(req, res) {
    await Service.findByIdAndDelete(req.params.serviceId);
    return res.json({ success: 'O serviço foi excluído com sucesso!' });
  },

  async List(req, res) {
    const services = await Service.find();
    services.reverse();
    return res.json(services);
  },
  async ListDetail(req, res) {
    const service = await Service.findById(req.params.serviceId);
    await service.populate(['user', 'service']).execPopulate();
    return res.json(service);
  },
};
