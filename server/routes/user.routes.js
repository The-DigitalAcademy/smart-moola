const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/postUser', userController.createUser);
router.get('/getUsers', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', userController.login);
router.post('/send-email', userController.sendEmail);
// router.delete('/', userController.deleteAll);

module.exports = router;
