// openai-client.js
const {OpenAI} = require("openai");



const generateCompletion = async (description, model ="gpt-3.5-turbo-instruct" ,max_tokens=1000) => {
    try {
      const prompt = `Given the following components: RMGButton, RMGInput, RMGText, RMGHeader, RMGTable, generate only the React HTML code (without any additional text or explanations) for a page with the following description: ${description}`;
      const openai  = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
      const response = await openai.completions.create({
      model:"gpt-3.5-turbo-instruct",
      prompt:prompt,
      max_tokens:1000
    });
    console.log("API Response",response)
    return response.choices[0].text.trim();
    } catch (error) {
      console.log(error)
    }
   
};

module.exports = { generateCompletion };
