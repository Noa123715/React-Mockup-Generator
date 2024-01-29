// server.js or a specific route file
const express = require('express');
const { generateReactCode } = require('./service/react-code-generator');
require('dotenv').config();
const app = express();
app.use(express.json());

app.post('/generate-react-code', async (req, res) => {
  const { description } = req.body;
  try {
    const reactCode = await generateReactCode(description);
    console.log(reactCode)
    res.json({ reactCode });
  } catch (error) {
    res.status(500).send('Error generating React code');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
