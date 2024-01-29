// openai-client.js
const {OpenAI} = require("openai");



const generateCompletion = async (prompt, model = "text-davinci-003", temperature = 0.7, maxTokens = 1000, stopSequences = ["</div>"]) => {
   console.log("how are you?")
   console.log(process.env.OPENAI_API_KEY)
    const openai  = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
    console.log(openai)
    const response = await openai.completions.create({
    model:model,
    prompt:prompt,
    temperature:temperature,
    max_tokens: maxTokens,
    stop: stopSequences,
  });
  console.log("APi Response",response)
  return response.choices[0].text.trim();
};

module.exports = { generateCompletion };
