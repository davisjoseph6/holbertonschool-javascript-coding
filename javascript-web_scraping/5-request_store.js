#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const outputFile = process.argv[3];

request(url, (err, response) => {
  const fs = require('fs');
  if (err) { console.error(err); }
  fs.writeFile(outputFile, response.body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
