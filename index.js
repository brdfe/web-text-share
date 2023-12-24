const path = require('path');
const express = require('express')
const { getTexts, addText } = require('./db');

const app = express()
const port = 80;

app.use(express.json());

app.post('/text', async (req, res) => {
    const { text } = req.body;
    await addText(text);
    res.json(await getTexts());
});

app.get('/text', async (_, res) => {
    const texts = await getTexts()
    res.json(texts);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./static/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
