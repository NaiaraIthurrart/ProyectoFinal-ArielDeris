

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getAllUsers);
router.delete('/', UserController.cleanInactiveUsers);
router.get('/admin-view/:userId', UserController.adminUserView);

module.exports = router;
