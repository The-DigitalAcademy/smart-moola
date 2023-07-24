const express = require("express");
const router = express.Router();
const users = require('../controllers/user.controller');

router.post('/postUser', users.createUser);
router.get('/getUsers', users.getUsers);
router.get('/:id', users.getUserById);
router.put('/:id', users.updateUser);
router.delete('/:id', users.deleteUser);
router.post('/sign', users.login);
// router.delete('/', users.deleteAll);

module.exports = router;
