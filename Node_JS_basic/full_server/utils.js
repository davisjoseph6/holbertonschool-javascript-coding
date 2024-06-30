// full_server/utils.js
import fs from 'fs/promises';

export async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const lines = data.split('\n').filter(Boolean);
    const students = lines.slice(1).reduce((acc, line) => {
      const [firstname, , , field] = line.split(',');
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstname);
      return acc;
    }, {});
    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
