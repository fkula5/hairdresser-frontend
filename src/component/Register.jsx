import React, { useState } from 'react';
import './styles.css';

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
    // Tutaj możesz dodać logikę rejestracji, np. wysłać dane do serwera
    // Czyszczenie pól formularza po złożeniu formularza
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="registration-container">
      <div className='registration-form'>
        <p className="registration-title">Register</p>
        <form onSubmit={handleSubmit}>
          <div className="registration-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="registration-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="registration-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="registration-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
