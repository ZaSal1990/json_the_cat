const request = require('request');

const breedFetcher = function() {
  let breed = process.argv[2];
  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breed, (error, body) => {
    console.log(error);
    const newData = JSON.parse(body.body);
    console.log(newData[0].description);
  });
};

breedFetcher();