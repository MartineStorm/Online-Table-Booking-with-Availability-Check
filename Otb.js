document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendarContainer = document.getElementById('calendar-container');
    var bookingForm = document.getElementById('booking-form');
    var peopleCountInput = document.getElementById('people-count');

    // Initialize FullCalendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        events: [
            {
                title: 'Available',
                start: '2024-09-22',
                backgroundColor: 'green',
                borderColor: 'green'
            },
            {
                title: 'Not Available',
                start: '2024-09-23',
                backgroundColor: 'red',
                borderColor: 'red'
            }
        ],
        dateClick: function(info) {
            var clickedDate = info.dateStr;
            checkAvailability(clickedDate);
        }
    });

    // Handle form submission
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page refresh
        var peopleCount = peopleCountInput.value;

        if (peopleCount > 0) {
            calendarContainer.style.display = 'block'; // Show calendar
            calendar.render(); // Render the calendar
        }
    });

    // Check availability for a selected date
    function checkAvailability(date) {
        var availableDates = ['2024-09-22', '2024-09-23']; // Format YYYY-MM-DD
        var status = availableDates.includes(date) ? 'Available' : 'Not Available';

        document.getElementById('availability-info').innerHTML = 'The selected date (' + date + ') is ' + status;
    }
});

// Initialize Pikaday on the date input field
document.addEventListener('DOMContentLoaded', function() {
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'DD/MM/YYYY', // Adjust the format as needed
        onSelect: function(date) {
            // Optional: update the input field with the selected date
            var selectedDate = date.toDateString();
            document.getElementById('datepicker').value = selectedDate;
        }
    });
});

// server.js
const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'table_booking'
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
});

// Route to get all bookings
app.get('/bookings', (req, res) => {
    connection.query('SELECT * FROM bookings', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Route to add a booking
app.post('/bookings', (req, res) => {
    const { restaurant_name, party_size, booking_date, booking_time } = req.body;
    connection.query('INSERT INTO bookings (restaurant_name, party_size, booking_date, booking_time) VALUES (?, ?, ?, ?)', [restaurant_name, party_size, booking_date, booking_time], (error) => {
        if (error) throw error;
        res.status(201).send('Booking added');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
