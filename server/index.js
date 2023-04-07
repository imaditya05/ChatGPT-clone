const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const port = 8000;
const app = express();
require('dotenv').config();
const configuration = new Configuration({
  organization: 'org-VLrAjH6KyG8xSMF6Uj8azpol',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

app.post('/', async (req, res) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say How are you doing',
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({
    data: response.data,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
