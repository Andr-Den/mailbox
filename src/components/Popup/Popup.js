import React from 'react';

import './Popup.css'

function Popup({ onClose, name, setName, folderIndex, handleNewName }) {

  function handleNameChange(e) {
    setName(e.target.value)
  }


  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__icon" onClick={onClose} />
        <span className="popup__header">Смена имени папки</span>
        <form onSubmit={(e) => handleNewName(e, folderIndex, name)} className="popup__form">
        <input onChange={handleNameChange} defaultValue={name} className="popup__input"/>
        <button type="submit" className="popup__button">Изменить</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;