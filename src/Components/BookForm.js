import React, { useState } from 'react';
import './Css/BookForm.css';
import { FaMotorcycle } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import AvailableTimes from './AvailableTimes';

function BookForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState); // Do something with the form data
  };

  return (
    <div className="book-form">
      <div className="form-container">
        <div className="form-header">
          <h1>Book a reservation</h1>
        </div>
        <form className="form-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formState.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              name="time"
              value={formState.time}
              onChange={handleChange}
            >
              {/* Render the available times as options */}
              {AvailableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formState.guests}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
