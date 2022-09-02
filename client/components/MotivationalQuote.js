const axios = require("axios");

const options = {
  method: "GET",
  url: "https://bodybuilding-quotes1.p.rapidapi.com/random-quote",
  headers: {
    "X-RapidAPI-Key": "4d9cf25ebamsh6f3bee31107276fp1d3176jsn7125abdd9ce4",
    "X-RapidAPI-Host": "bodybuilding-quotes1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
