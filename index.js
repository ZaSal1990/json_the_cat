const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error:', error);
  } else {
    const newData = JSON.parse(desc.body);
    const desc = newData[0].description;
    console.log(desc);
  }
});