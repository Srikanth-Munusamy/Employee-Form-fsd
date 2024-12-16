const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', employeeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

