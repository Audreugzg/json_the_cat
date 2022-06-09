const request = require('request');
//const catBreed = process.argv.slice(2);





const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url,(error,response,body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the homepage.
    //console.log(typeof body);
    if (error !== null) {
      callback("error found with web",null);
      //return console.log("error found");
      return;

      
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback("Breed name not found",null);
      return;
      //console.log("Breed name not found");
    }
    //console.log(data);
    callback(null,data[0]["description"]);
    //console.log(data[0]["description"]);
  });


};

module.exports = { fetchBreedDescription };