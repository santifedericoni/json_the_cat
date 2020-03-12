const request = require('request');
const fs = require('fs');
let userInput = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/images/search?breed_ids=${userInput}`, (error, response, body ) => {
  fs.writeFile('./test.html',body, (err) =>  {
    //console.log(body)
    const data = JSON.parse(body);
    //console.log(data[0]);
    console.log(data[0]['breeds'][0]['description']);
    //console.log(typeof data);
  });
});

