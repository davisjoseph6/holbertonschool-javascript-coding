#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
let filmIsOn = 0;
request(url, function (error, response) {
  if (error) {
    console.error(error);
  } else {
    const results = JSON.parse(response.body);
    const films = results.results;
    films.forEach(film => {
      for (const actor of film.characters) {
        if (actor.includes('18')) { filmIsOn += 1; }
      }
    });
  }
  console.log(filmIsOn);
});
