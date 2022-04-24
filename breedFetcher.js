const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breed, (error, data) => {
    callback(error, data);
  });
};

module.exports = { fetchBreedDescription };