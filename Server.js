const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username', // Replace with your MySQL username
  password: 'your_password', // Replace with your MySQL password
  database: 'table_booking'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get bookings
app.get('/bookings', (req, res) => {
  connection.query('SELECT * FROM bookings', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'OtbDatabase.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve Otb.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Otb.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Update this with your MySQL username
  password: '', // Update this with your MySQL password
  database: 'table_booking'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});
