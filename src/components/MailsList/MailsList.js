import React, { useState } from 'react';
import MailCard from '../MailCard/MailCard';
import MailsTable from '../MailsTable/MailsTable';

import './MailsList.css';

function MailsList({ mails }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen ? <MailCard card={selectedCard} onClose={handleClose} /> : ''}
      <table className="table__list">
        <MailsTable mails={mails} onClick={handleCardClick} />
      </table>
    </>
  );
}

export default MailsList;
