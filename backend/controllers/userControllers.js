

const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'nombre correo rol');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cleanInactiveUsers = async (req, res) => {
  try {
    const inactiveUsers = await User.find({
      lastConnection: { $lt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
    });

    inactiveUsers.forEach(async (user) => {
      await sendInactiveUserEmail(user);
      await User.findByIdAndDelete(user._id);
    });

    res.json({ message: 'Usuarios inactivos eliminados y correos enviados' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function sendInactiveUserEmail(user) {


}

exports.adminUserView = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { action, newRole } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (action === 'view') {
  


    } else if (action === 'modifyRole') {
      user.rol = newRole;
      await user.save();
    } else if (action === 'delete') {
      await user.remove();
    }

    res.json({ message: 'Operaciones de administrador realizadas' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
