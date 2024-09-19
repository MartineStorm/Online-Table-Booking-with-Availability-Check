const express = require('express');
const path = require('path');
const mysql = require('mysql2');
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

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'OtbDatabase.html'));
});

// Endpoint to get bookings
app.get('/bookings', (req, res) => {
  connection.query('SELECT * FROM bookings', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
