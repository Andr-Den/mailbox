import React from 'react';
import './MailCard.css';

function MailCard({ card, onClose }) {
  if (!card) return null;
  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__icon" onClick={onClose} />
        <div className="popup__header">
          <h3>{card.author}</h3>
          <p>{card.date}</p>
        </div>
        <h2>{card.text}</h2>
      </div>
    </div>
  );
}

export default MailCard;
