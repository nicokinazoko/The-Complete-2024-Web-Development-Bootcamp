/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// define questions
const questions = [
  {
    type: 'input',
    name: 'link',
    message: 'Type your link',
  },
];
inquirer
  .prompt(questions)
  .then((answers) => {
    // process create qr code
    var qr_png = qr.image(answers.link, { type: 'png' });

    qr_png.pipe(fs.createWriteStream('qr-picture.png'));

    var png_string = qr.imageSync(answers.link, { type: 'png' });

    // write link to txt
    fs.writeFile('URL.txt', answers.link, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    console.log('error happened : ', error);
  });
