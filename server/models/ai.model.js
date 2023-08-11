const axios = require('axios');
const dotenv = require('dotenv');
const openAIApiKey = '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'




async function getExplanationForQuestion(req, res) {
  const question = req.body.question;

  try {
    const explanation = await getExplanationForWord(question);
    res.json({ explanation });
  } catch (error) {
    console.error('Error fetching explanation:', error.message);
    res.status(500).json({ error: 'Error fetching explanation' });
  }
}






async function getExplanationForWord(question) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      // Use 'text-davinci-003' engine for GPT-3.5 Turbo
      {
        prompt: `Explain "${question}" in a simplified way, credit and debt meaning, use a maximum of 70 words:`,
        max_tokens: 50,
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${openAIApiKey}`, // Use 'Bearer' prefix before the API key
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching simplified explanation:', error.message);
    return null;
  }
}
module.exports = {
  getExplanationForWord
};