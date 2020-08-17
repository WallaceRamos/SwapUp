const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const {
      name, email, birthdate, address, password,
    } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Esta conta de usuário já existe!' });
    }
    const user = await User.create({
      userImage: filename,
      name,
      email,
      birthdate,
      address,
      password,
    });
    return res.json(user);
  },
  async index(req, res) {
    const { userId } = req.params;
    const users = await User.find(userId);
    users.password = undefined;
    return res.json(users);
  },
  async show(req, res) {
    const { userId } = req.params;
    const user = await User.findById(userId);
    user.password = undefined;
    return res.json(user);
  },
  async update(req, res) {
    const { filename } = req.file;
    const { userId } = req.params;
    const {
      name, email, birthdate, address,
    } = req.body;
    const user = await User.findByIdAndUpdate(userId, {
      userImage: filename,
      name,
      email,
      birthdate,
      address,
    }, { new: true });
    return res.json(user);
  },
  async destroy(req, res) {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    return res.json({ success: 'Sua conta de usuário foi excluída com sucesso!' });
  },
};
