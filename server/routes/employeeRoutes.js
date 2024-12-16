const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to add an employee
router.post('/employees', async (req, res) => {
  const { name, employeeId, email, phone, department, dateOfJoining, role } = req.body;

  try {
    // Check if Employee ID or Email already exists
    const [existingEmployee] = await db.query('SELECT * FROM employees WHERE employee_id = ? OR email = ?', [employeeId, email]);
    
    if (existingEmployee.length > 0) {
      return res.status(400).send('Employee ID or Email already exists');
    }

    // Insert new employee data into the database
    const result = await db.query(
      'INSERT INTO employees (name, employee_id, email, phone, department, date_of_joining, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, employeeId, email, phone, department, dateOfJoining, role]
    );

    res.status(200).send('Employee added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding employee');
  }
});

module.exports = router;

