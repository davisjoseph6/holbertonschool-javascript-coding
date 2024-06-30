const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const lines = data.split('\n');
    // Remove the header and any trailing empty lines
    const students = lines.slice(1).filter((line) => line.length > 0);
    const numberOfStudents = students.length;
    if (numberOfStudents === 0) {
      throw new Error('No students found');
    }
    console.log(`Number of students: ${numberOfStudents}`);

    const fields = {};
    for (const student of students) {
      const [,, , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      const firstName = student.split(',')[0];
      fields[field].push(firstName);
    }

    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
