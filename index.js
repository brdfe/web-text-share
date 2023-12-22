const path = require('path');
const express = require('express')
const app = express()
const port = 80;

app.use(express.json());

const texts = [];

app.post('/text', (req, res) => {
    const { text } = req.body;
    texts.push(text);
    res.json(texts);
});

app.get('/text', (_, res) => {
    res.json(texts);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./static/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
