const express = require("express");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");
require("dotenv").config();


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/generate-jsx", async (req, res) => {
  const openai = new OpenAI((apiKey = process.env.OPENAI_API_KEY));
  const description = req.body.description;

  const response = await openai.completions.create({
    model: "text-davinci-003", // Choose the model you prefer
    prompt: `Generate JSX code for: ${description}`,
    max_tokens: 150,
  });

  const jsxCode = response.data.choices[0].text.trim();
  res.json({ jsx: jsxCode });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
