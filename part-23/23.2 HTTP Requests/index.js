import express from 'express';
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>My contact here </h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Here is my about</h1>');
});
