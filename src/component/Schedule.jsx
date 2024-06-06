import React, { useState, useEffect } from 'react';
import './styles.css';

function Schedule() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentWeek = getWeekNumber(currentDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [weekDates, setWeekDates] = useState([]);
  const [error, setError] = useState({
    selectedDate: '',
    email: '',
    time: '',
  });

  useEffect(() => {
    setWeekDates(generateWeekDates());
  }, []);

  function getWeekNumber(date) {
    const weekNumber = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000));
    return weekNumber;
  }

  function generateWeekDates() {
    const days = [];
    const dayOfWeek = currentDate.getDay() - 1;
    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - dayOfWeek));

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }

    return days;
  }

  const handleDateClick = (date) => {
    if (date && (date.getDay() === 6 || date.getDay() === 0)) {
      alert("Sorry, we are closed on weekends.");
      return;
    }
    setSelectedDate(date);
    setError((prevState) => ({ ...prevState, selectedDate: '' }));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError((prevState) => ({ ...prevState, email: '' }));
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    setError((prevState) => ({ ...prevState, time: '' }));
  };

  const handleSubmit = () => {
    let hasError = false;
    const newError = {};

    if (!selectedDate) {
      newError.selectedDate = 'Please select a date';
      hasError = true;
    }

    if (!email) {
      newError.email = 'Please enter your email';
      hasError = true;
    }

    if (!time) {
      newError.time = 'Please select time';
      hasError = true;
    }

    if (hasError) {
      setError((prevState) => ({ ...prevState, ...newError }));
    } else {
      // Simulate form submission
      alert("Thank you for your reservation. Confirmation has been sent to your email.");
      // Redirect to home page
      window.location.href = "/";
    }
  };

  return (
    <div className="schedule-container">
      <div className="frame">
        <div className="week-header">
          <h2>{`Week ${currentWeek}, ${currentYear}`}</h2>
        </div>

        <div className="horizontal-mini-calendar">
          {weekDates.map((date, index) => (
            <div
              key={index}
              className={`calendar-day ${selectedDate && date.getDate() === selectedDate.getDate() ? 'selected' : ''}`}
              onClick={() => handleDateClick(date)}
              style={{ border: selectedDate && date.getDate() === selectedDate.getDate() ? '2px solid #000' : 'none' }}
            >
              <div className="day-label">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className="day-number">{date.getDate()}</div>
            </div>
          ))}
        </div>
        {error.selectedDate && <p className="error-message">{error.selectedDate}</p>}
        
        <div className="select-time">
          <label htmlFor="time">Select Time:</label>
          <select id="time" name="time" value={time} onChange={handleTimeChange}>
            <option value="">Select</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </select>
          {error.time && <p className="error-message">{error.time}</p>}
        </div>

        <div className="email-input">
          <label htmlFor="email">Enter Your Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
          {error.email && <p className="error-message">{error.email}</p>}
        </div>

        <div className="submit-button">
          <button onClick={handleSubmit} disabled={!selectedDate || !(selectedDate.getDay() !== 6 && selectedDate.getDay() !== 0)}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
