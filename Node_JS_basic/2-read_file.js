const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');

  const students = lines.slice(1).filter((line) => line);

  const fields = {};
  students.forEach((student) => {
    const [firstname, , , field] = student.split(',');
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  });

  console.log(`Number of students: ${students.length}`);
  Object.keys(fields).forEach((field) => {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  });
};

module.exports = countStudents;
