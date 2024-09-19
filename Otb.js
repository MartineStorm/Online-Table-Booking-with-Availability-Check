document.addEventListener('DOMContentLoaded', function() {
    var picker = new pikaday({
        field: document.getElementById('calendar-container'),
        onSelect: function(date) {
            var selectedDate = date.toDateString();
            checkAvailability(SelectedDate);
        }
    });
});

function checkAvailability(date) {
    var availabilityInfo = document.getElementById('availability-info');


    var availableDates = ['Sun Sep 22 2024', 'Mon Sep 23 2024'];
    if (availableDates.includes(date)) {
        availableInfo.textContent = 'Available';
        availabilityInfo.className = 'available';
    } else {
        availabilityInfo.textContent = 'Not Available';
        availabilityInfo.className = 'unavailable';
    }
}