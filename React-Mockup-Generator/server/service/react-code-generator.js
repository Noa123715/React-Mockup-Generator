// react-code-generator.js
const { generateCompletion } = require("./openai-client")

const generateReactCode = async (description) => {
  const prompt = `Given the following components: RMGButton, RMGInput, RMGText, RMGHeader, RMGTable, generate only the React HTML code (without any additional text or explanations) for a page with the following description: ${description}`;
  return await generateCompletion(prompt);
};

module.exports = { generateReactCode };
