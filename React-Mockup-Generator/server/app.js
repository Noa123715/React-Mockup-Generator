// server.js or a specific route file
const express = require('express');
const { generateCompletion } = require('./service/openai-client');
require('dotenv').config();
const app = express();
app.use(express.json());

app.post('/generate-mockup', async (req, res) => {
  const { description } = req.body;
  try {
    const reactCode = await generateCompletion(description);
    console.log(reactCode)
    res.json( reactCode );
  } catch (error) {
    res.status(500).send('Error generating React code');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
