const axios =require ('axios');
const { getExplanationForWord } = require('../models/ai.model');

async function getMeaningOfWord(req, res) {
    const question = req.body.question;
  
    try {
      // Get simplied explanation for the provided word
     const explanation = await getExplanationForWord(question);
  
      res.json({explanation });
    } catch (error) {
     console.error('Error fetching the meaning of the word:', error.message);
      res.status(500).json({ error: 'Error fetching the meaning of the word' });
    }
  }

  module.exports = {
    getMeaningOfWord
  };