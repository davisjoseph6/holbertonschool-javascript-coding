process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  process.stdout.write(`Your name is: ${input}`);

  process.stdout.write('This important software is now closing\n');
  process.exit();
});
