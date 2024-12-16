import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Employee Management System</h1>
        <p>Add a new employee to the system</p>
      </header>
      
      <div className="form-container">
        <EmployeeForm />
      </div>
    </div>
  );
}

export default App;

