const { Configuration, OpenAIApi } = require('openai');
const cors = require('cors');
const express = require('express');
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();
const configuration = new Configuration({
  organization: 'org-VLrAjH6KyG8xSMF6Uj8azpol',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

app.post('/', async (req, res) => {
  const { message } = req.body;
  console.log(message);
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });

  res.status(200).send({
    success: true,
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
