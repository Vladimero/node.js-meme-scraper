import fs from 'node:fs'; // build-in file system of node
import axios from 'axios';
import { parse } from 'node-html-parser';

// create a new file through code

const directoryPath = 'memes';
// Check if the directory already exists
if (!fs.existsSync(directoryPath)) {
  // If it doesn't exist, create the directory
  fs.mkdirSync(directoryPath);
  console.log(`Directory '${directoryPath}' created successfully.`);
} else {
  console.log(`Directory '${directoryPath}' already exists.`);
}

const websiteUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

// Accessing the website, using the fetch method

fetch(websiteUrl)
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/* accessing the page through axios

axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

/* MY VERSION: seems not to work, the function is not filtering the html code

const $ = cheerio.load(
  '<img src="https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300">...</img>',
);

$.html();
*/
