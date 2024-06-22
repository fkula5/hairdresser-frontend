import React, { useState, useEffect } from 'react';
import './styles.css';
import userIcon from './user.png'; 

function Grades({ name }) {
  const initialComments = {
    "Fryzjer A": ["Świetna obsługa!", "Bardzo polecam, profesjonalne podejście.", "Bardzo miłe miejsce, na pewno wrócę."],
    "Fryzjer B": ["Najlepszy fryzjer w mieście!", "Bardzo dokładne strzyżenie.", "Zawsze wychodzę zadowolony."],
    "Fryzjer C": ["Szybko i sprawnie.", "Przystępne ceny.", "Sympatyczna atmosfera."]
  };

  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(initialComments[name] || []);
  }, [name]);

  // Funkcja obsługi kliknięcia gwiazdki
  const handleStarClick = (starValue) => {
    setStars(starValue); // Aktualizacja stanu oceny
  };

  // Funkcja obsługi zmiany w polu tekstowym
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Funkcja obsługi zatwierdzania opinii
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
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
        <div className="comment-section">
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add your review"
          />
          <button onClick={handleCommentSubmit}>Add your review</button>
        </div>
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <img src={userIcon} alt="User Icon" className="user-icon" />
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grades;
