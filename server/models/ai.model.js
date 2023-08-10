const axios = require('axios');
const dotenv = require('dotenv');
const openAIApiKey = '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'


async function getExplanationForWord(word) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      // Use 'text-davinci-003' engine for GPT-3.5 Turbo
      {
        prompt: `Explain "${word}" in a simplified, credit and debt meaning, use a maximum of 70 words:`,
        max_tokens: 50,
        temperature: 0.7,
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