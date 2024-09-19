document.addEventListener('DOMContentLoaded', function () {
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        onSelect: function(date) {
            var selectedDate = moment(date).format('YYYY-MM-DD');
            checkAvailability(selectedDate);
        }
    });
});

function checkAvailability(date) {
    var availabilityInfo = document.getElementById('availability-info');
    
    // Simulated available dates
    var availableDates = ['2024-09-22', '2024-09-23']; // Format YYYY-MM-DD
    
    if (availableDates.includes(date)) {
        availabilityInfo.textContent = 'Available';
        availabilityInfo.className = 'available';
    } else {
        availabilityInfo.textContent = 'Not Available';
        availabilityInfo.className = 'unavailable';
    }
}
