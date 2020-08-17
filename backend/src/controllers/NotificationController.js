const Notification = require('../models/Notification');

module.exports = {
    async store(req, res) {
      const { title, category, description, serviceImage } = req.body;
      const notification = await Notification.create({
        
        title,
        category,
        description,
        serviceImage,
          userRegister: req.params.userRegisterId,
          user: req.params.userId,
          service: req.params.serviceId,
        });
        return res.json(notification);
    },
    async index (req, res){
        const notification = await Notification.find({ user: req.params.userId });
        return res.json(notification);
      },
      async show(req, res){
        const notification = await Notification.findById(req.params.notificationId);
        return res.json(notification);
        
      },
      async destroy(req, res) {
        await Notification.findByIdAndDelete(req.params.notificationId);
        return res.json({ success: 'O produto foi excluído com sucesso!' });
      },
}