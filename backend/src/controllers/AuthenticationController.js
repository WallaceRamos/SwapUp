const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ error: 'Senha inválida!' });
    }
    return res.json(user);
  },
};
