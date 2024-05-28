import React, { useState } from 'react';
import './styles.css';

function Schedule() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentWeek = getWeekNumber(currentDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState('');

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

  function handleDateClick(date) {
    if (date && (date.getDay() === 6 || date.getDay() === 0)) {
      alert("Sorry, we are closed on weekends.");
      return;
    }
    setSelectedDate(date);
  }

  const weekDates = generateWeekDates();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="schedule-container">
      <div className="week-header">
        <h2>{`Week ${currentWeek}, ${currentYear}`}</h2>
      </div>

      <div className="horizontal-mini-calendar">
        {weekDates.map((date, index) => (
          <div
            key={index}
            className={`calendar-day ${selectedDate && date.getDate() === selectedDate.getDate() ? 'selected' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            <div className="day-label">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
            <div className="day-number">{date.getDate()}</div>
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="select-time">
          <label htmlFor="time">Select Time:</label>
          <select id="time" name="time">
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </select>
        </div>
      )}

      {selectedDate && !(selectedDate.getDay() === 6 || selectedDate.getDay() === 0) && (
        <div className="email-input">
          <label htmlFor="email">Enter Your Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
        </div>
      )}

      {selectedDate && !(selectedDate.getDay() === 6 || selectedDate.getDay() === 0) && (
        <div className="submit-button">
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Schedule;
