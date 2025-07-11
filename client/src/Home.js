
// // Home.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import './styles.css'; // Make sure to define new styles here

// const Home = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const dummyEvents = [
//       {
//         _id: '1',
//         name: 'Music Festival',
//         location: 'Mumbai',
//         date: '2025-08-01T18:00:00Z',
//         capacity: 100,
//         bookings: [],
//         cssClass: 'event-card music',
//       },
//       {
//         _id: '2',
//         name: 'Tech Conference',
//         location: 'Bangalore',
//         date: '2025-08-10T10:00:00Z',
//         capacity: 150,
//         bookings: [],
//         cssClass: 'event-card tech',
//       },
//       {
//         _id: '3',
//         name: 'Startup Meetup',
//         location: 'Hyderabad',
//         date: '2025-08-15T16:00:00Z',
//         capacity: 50,
//         bookings: [],
//         cssClass: 'event-card startup',
//       },
//       {
//         _id: '4',
//         name: 'Dance Night',
//         location: 'Delhi',
//         date: '2025-08-20T20:00:00Z',
//         capacity: 80,
//         bookings: [],
//         cssClass: 'event-card dance',
//       },
//       {
//         _id: '5',
//         name: 'Food Carnival',
//         location: 'Chennai',
//         date: '2025-09-01T12:00:00Z',
//         capacity: 120,
//         bookings: [],
//         cssClass: 'event-card food',
//       },
//       {
//         _id: '6',
//         name: 'Art Exhibition',
//         location: 'Pune',
//         date: '2025-09-10T14:00:00Z',
//         capacity: 60,
//         bookings: [],
//         cssClass: 'event-card art',
//       },
//       {
//         _id: '7',
//         name: 'Book Fair',
//         location: 'Kolkata',
//         date: '2025-09-15T10:00:00Z',
//         capacity: 200,
//         bookings: [],
//         cssClass: 'event-card book',
//       },
//     ];

//     setEvents(dummyEvents);
//   }, []);

//   const handleBooking = () => {
//     if (!name || !email || !selectedEvent) {
//       setMessage('All fields are required');
//       return;
//     }

//     const selected = events.find(ev => ev._id === selectedEvent);

//     axios
//       .post('http://localhost:5000/api/bookings', {
//         name,
//         email,
//         eventId: selectedEvent,
//       })
//       .then(res => {
//         setMessage('✅ Booking successful!');
//         navigate('/payment', {
//           state: {
//             eventName: selected.name,
//             location: selected.location,
//             date: selected.date,
//           },
//         });
//       })
//       .catch(err => {
//         console.error(err);
//         setMessage('❌ Booking failed or full.');
//       });
//   };

//   return (
//     <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <h1 className="title">🎉 Book Your Event</h1>

//       <div className="form-group">
//         <input
//           placeholder="Your Name"
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//         <input
//           placeholder="Your Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <select value={selectedEvent} onChange={e => setSelectedEvent(e.target.value)}>
//           <option value="">Select an Event</option>
//           {events.map(ev => (
//             <option key={ev._id} value={ev._id}>
//               {ev.name} ({ev.bookings.length}/{ev.capacity} booked)
//             </option>
//           ))}
//         </select>
//         <button onClick={handleBooking}>Book Ticket</button>
//       </div>

//       {message && <p className="msg">{message}</p>}

//       <h2 className="subtitle">📅 Upcoming Events</h2>
//       <div className="events">
//         {events.map((event, i) => (
//           <motion.div
//             className={event.cssClass}
//             key={i}
//             whileHover={{ scale: 1.03 }}
//           >
//             <h3>{event.name}</h3>
//             <p>📍 {event.location}</p>
//             <p>🗓️ {new Date(event.date).toLocaleString()}</p>
//             <p>🎟️ {event.bookings.length}/{event.capacity} booked</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Home;


// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const dummyEvents = [
      { _id: '1', name: 'Music Festival', location: 'Mumbai', date: '2025-08-01T18:00:00Z', capacity: 100, bookings: [], cssClass: 'event-card music' },
      { _id: '2', name: 'Tech Conference', location: 'Bangalore', date: '2025-08-10T10:00:00Z', capacity: 150, bookings: [], cssClass: 'event-card tech' },
      { _id: '3', name: 'Startup Meetup', location: 'Hyderabad', date: '2025-08-15T16:00:00Z', capacity: 50, bookings: [], cssClass: 'event-card startup' },
      { _id: '4', name: 'Dance Night', location: 'Delhi', date: '2025-08-20T20:00:00Z', capacity: 80, bookings: [], cssClass: 'event-card dance' },
      { _id: '5', name: 'Food Carnival', location: 'Chennai', date: '2025-09-01T12:00:00Z', capacity: 120, bookings: [], cssClass: 'event-card food' },
      { _id: '6', name: 'Art Exhibition', location: 'Pune', date: '2025-09-10T14:00:00Z', capacity: 60, bookings: [], cssClass: 'event-card art' },
      { _id: '7', name: 'Book Fair', location: 'Kolkata', date: '2025-09-15T10:00:00Z', capacity: 200, bookings: [], cssClass: 'event-card book' }
    ];
    setEvents(dummyEvents);
  }, []);

  const handleBooking = () => {
    if (!name || !email || !selectedEvent) {
      setMessage('All fields are required');
      return;
    }

    const selected = events.find(ev => ev._id === selectedEvent);

    axios.post('http://localhost:5000/api/bookings', {
      name,
      email,
      eventId: selectedEvent
    })
      .then(res => {
        setMessage('✅ Booking successful!');
        navigate('/payment', {
          state: {
            eventName: selected.name,
            location: selected.location,
            date: selected.date
          }
        });
      })
      .catch(err => {
        console.error(err);
        setMessage('❌ Booking failed or full.');
      });
  };

  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="title">🎉 Book Your Event</h1>

      <div className="form-group">
        <input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
        <select value={selectedEvent} onChange={e => setSelectedEvent(e.target.value)}>
          <option value="">Select an Event</option>
          {events.map(ev => (
            <option key={ev._id} value={ev._id}>
              {ev.name} ({ev.bookings.length}/{ev.capacity} booked)
            </option>
          ))}
        </select>
        <button onClick={handleBooking}>🎟️ Book Ticket</button>
        {message && <p className="msg">{message}</p>}
      </div>

      <h2 className="subtitle">📅 Upcoming Events</h2>
      <div className="events">
        {events.map((event, i) => (
          <motion.div className={event.cssClass} key={i} whileHover={{ scale: 1.03 }}>
            <h3>{event.name}</h3>
            <p>📍 {event.location}</p>
            <p>🗓️ {new Date(event.date).toLocaleString()}</p>
            <p>🎟️ {event.bookings.length}/{event.capacity} booked</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
