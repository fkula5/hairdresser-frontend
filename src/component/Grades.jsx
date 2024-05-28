import React, { useState } from 'react';
import './styles.css';

function Grades({ name }) {
  const [stars, setStars] = useState(0); // Stan przechowujący aktualną ocenę

  // Funkcja obsługi kliknięcia gwiazdki
  const handleStarClick = (starValue) => {
    setStars(starValue); // Aktualizacja stanu oceny
  };

  return (
    <div className="grades">
      <div className='user'>
        <p>{name}</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? "star active" : "star"} // Dodanie klasy "active" dla aktywnych gwiazdek
              onClick={() => handleStarClick(star)} // Obsługa kliknięcia gwiazdki
            >
              ★ {/* Unicode dla gwiazdki */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grades;
