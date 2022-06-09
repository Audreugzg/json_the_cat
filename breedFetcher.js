const request = require('request');
const catBreed = process.argv.slice(2);

const url = "https://api.thecatapi.com/v1/breeds/search?q=" + catBreed;

request(url,(error,response,body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the homepage.
  //console.log(typeof body);
  if (error !== null) {
    return console.log("error found");
    
  }
 
  const data = JSON.parse(body);
  if (!data[0]) {
    return console.log("Breed name not found");
  }
  //console.log(data);
  console.log(data[0]["description"]);
});