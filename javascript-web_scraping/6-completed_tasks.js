#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const tasks = JSON.parse(body);
  const results = {};

  tasks.forEach(task => {
    if (task.completed) {
      if (!results[task.userId]) {
        results[task.userId] = 0;
      }
      results[task.userId]++;
    }
  });

  console.log(results);
});
