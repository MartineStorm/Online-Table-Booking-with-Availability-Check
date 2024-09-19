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
