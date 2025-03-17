//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

function checkPassword(req, res, next) {
  const password = req.body.password;
  if (password === 'ILoveProgramming') {
    next();
  } else {
    res.send('<h1>wrong password</h1>');
  }
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkPassword);

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post('/check', (req, res, next) => {
  res.sendFile(__dirname + '/public/secret.html');
});
