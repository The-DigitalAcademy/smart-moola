const express = require("express");
const router = express.Router();
const QnAController = require('../controllers/QnA.controller');

router.post('/qna', QnAController.storeQuestion);
router.get('/getqna',QnAController.getAllQuestions);
router.post('/q', QnAController.getFrombody);
module.exports = router;
