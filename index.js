import axios from 'axios'; // Don´t used, cause interface appears in green und not fully, still aproximately 400 charachters left
import * as cheerio from 'cheerio';
import got from 'got'; // just tried that from my google research

// Accessing the website, using the .get and .then method of the library

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/*
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});
*/

/*
got(url)
  .then((response) => {
    const $ = cheerio.load(response.body);
    console.log($('div')[0]);
  })
  .catch((err) => {
    console.log(err);
  });
*/

const $ = cheerio.load('<div>...</div>', null, false); // even <section id="images"...> not work to filter the elements. Still showing the whole html code
$.html(); // run the function
// $('div');
