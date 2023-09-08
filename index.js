import fs from 'node:fs'; // build-in file system of node
import path from 'node:path'; // build-in path system of node
import axios from 'axios';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

// create a new file through code
fs.appendFile('memes', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

// delete the second file, whatever: the appendFile created two files...
fs.unlink('newfile_2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// Accessing the website, using the fetch method
/*
fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/

// accessing the page through axios
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

/*
const $ = cheerio.load('<div>...</div>', null, false); // even <section id="images"...> not work to filter the elements. Still showing the whole html code
$.html(); // run the function
*/
