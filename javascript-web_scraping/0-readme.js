#!/usr/bin/node
const filename = process.argv[2];

const fs = require('fs');

fs.readFile(filename, 'utf-8', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});
