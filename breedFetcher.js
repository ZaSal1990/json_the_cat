const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breed, (error, data) => {
    data = (JSON.parse(data.body))[0].description; //accessing description value
    callback(error, data);
  });
};

module.exports = { fetchBreedDescription };