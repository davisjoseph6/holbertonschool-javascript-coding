// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[3]);
      // Format and send response
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[3]);
      // Filter by major, format, and send response
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
