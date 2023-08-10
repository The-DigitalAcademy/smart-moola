const { getExplanationForWord } = require('../models/ai.model');

async function getMeaningOfWord(req, res) {
    const word = req.body.word;
  
    try {
      // Get simplied explanation for the provided word
      const explanation = await getExplanationForWord(word);
  
      res.json({ word, explanation });
    } catch (error) {
      console.error('Error fetching the meaning of the word:', error.message);
      res.status(500).json({ error: 'Error fetching the meaning of the word' });
    }
  }
  module.exports = {
    getMeaningOfWord
  };