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

// Middleware to parse JSON data
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Otb2.html'));
});

// Handle form submission
app.post('/submit-booking', (req, res) => {
  const { restaurant, partySize, date, time } = req.body;

  // Insert data into the SQL table
  const query = 'INSERT INTO bookings (restaurant, partySize, date, time) VALUES (?, ?, ?, ?)';
  connection.query(query, [restaurant, partySize, date, time], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error inserting data');
    }
    res.status(200).send('Booking submitted');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
