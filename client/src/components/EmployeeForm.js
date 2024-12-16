import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    employeeId: '',
    email: '',
    phone: '',
    department: 'HR',
    dateOfJoining: '',
    role: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!employeeData.name || !employeeData.employeeId || !employeeData.email || !employeeData.phone || !employeeData.role) {
      setError('All fields are required.');
      return;
    }

    // Make API call to submit data
    try {
      const response = await axios.post('http://localhost:5000/api/employees', employeeData);
      setSuccess('Employee added successfully!');
      setError('');
      setEmployeeData({
        name: '',
        employeeId: '',
        email: '',
        phone: '',
        department: 'HR',
        dateOfJoining: '',
        role: ''
      });
    } catch (err) {
      setError(err.response ? err.response.data : 'Error adding employee');
    }
  };

  const handleReset = () => {
    setEmployeeData({
      name: '',
      employeeId: '',
      email: '',
      phone: '',
      department: 'HR',
      dateOfJoining: '',
      role: ''
    });
    setError('');
    setSuccess('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={employeeData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Employee ID:</label>
          <input type="text" name="employeeId" value={employeeData.employeeId} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={employeeData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phone" value={employeeData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Department:</label>
          <select name="department" value={employeeData.department} onChange={handleChange}>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div>
          <label>Date of Joining:</label>
          <input type="date" name="dateOfJoining" value={employeeData.dateOfJoining} onChange={handleChange} />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" name="role" value={employeeData.role} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default EmployeeForm;

