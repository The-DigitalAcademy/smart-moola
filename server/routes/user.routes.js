const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller');
// const { getMeaningOfWord } = require('./app/Controllers/gpt');

router.post('/postUser', userController.createUser);
router.get('/getUsers', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', userController.login);
router.post('/send-email', userController.sendEmail);
router.post('/otp-verification',userController.isOtpValid);
router.post('/password-update', userController.updatePassword);
// app.post('/api/meaning', getMeaningOfWord);

module.exports = router;
