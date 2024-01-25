#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
request('https://swapi-api.hbtn.io/api/films/' + id, function (error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(response.body).title);
  }
});
