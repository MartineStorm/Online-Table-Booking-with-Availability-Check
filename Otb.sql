-- Create the database
CREATE DATABASE IF NOT EXISTS table_booking;

-- Use the database
USE table_booking;

-- Create the bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_name VARCHAR(255),
    party_size INT,
    booking_date DATE,
    booking_time TIME
);

INSERT INTO bookings (restaurant_name, party_size, booking_date, booking_time)
VALUES ('The Bistro', 4, '2024-10-15', '18:00:00'),
       ('Pasta Palace', 2, '2024-10-16', '19:30:00');
