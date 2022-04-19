import React from 'react';
import './MailCard.css';

function MailCard({ card, onClose }) {
  if (!card) return null;
  return (
    <div className="mail-card">
      <div className="mail-card__container">
        <button className="mail-card__icon" onClick={onClose} />
        <div className="mail-card__header">
          <h3>{card.author}</h3>
          <p>{card.date}</p>
        </div>
        <h2>{card.text}</h2>
      </div>
    </div>
  );
}

export default MailCard;
