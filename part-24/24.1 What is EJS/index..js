import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let dayType = '';
  let advice = '';
  const today = new Date('16-03-2025').getDay();
  if (today !== 0 || today !== 6) {
    dayType = 'weekday';
    advice = `it's time to work hard!`;
  } else {
    dayType = 'weekend';
    advice = `it's time to have fun!`;
  }
  res.render('index.ejs', { dayType, advice });
});

app.listen(port, () => {
  console.log('App listen on port ' + port);
});
