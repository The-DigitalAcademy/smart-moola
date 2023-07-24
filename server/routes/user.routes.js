module.exports = (app) => {
    const users = require('../controllers/user.controller');
  
    const router = require('express').Router();
  
    router.post('/signup', users.create);
    router.get('/', users.findAll);
    router.get('/:id', users.findOne);
    router.put('/:id', users.update);
    router.delete('/:id', users.delete);
    router.post('/sign', users.signIn);
    router.delete('/', users.deleteAll);
  
    app.use('/api/users', router);
  };
  