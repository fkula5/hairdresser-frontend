import React, { useState } from 'react';
import './styles.css';

function Grades({ name }) {
  const [stars, setStars] = useState(0);

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
              className={star <= stars ? "star active" : "star"} 
              onClick={() => handleStarClick(star)} 
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
