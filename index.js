import axios from 'axios';

// Accessing the website, using the .get and .then method of the library
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

// GET request for remote image in node.js
/*
  axios({
  method: 'get',
  url: 'https://memegen-link-examples-upleveled.netlify.app/',
  responseType: 'stream',
}).then(function (response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'));
});
*/
