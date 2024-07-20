import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>{booking.name} - {booking.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
