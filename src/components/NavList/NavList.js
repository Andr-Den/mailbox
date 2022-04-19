import React, { useEffect, useState } from 'react';
import Popup from '../Popup/Popup';

import './NavList.css';


const foldersList = [
  {
    name: 'Входящие',
  },
  {
    name: 'Отправленные',
  },
  {
    name: 'Черновики',
  },
  {
    name: 'Спам',
  },
  {
    name: 'Корзина',
  },
];

function NavList({ currentFolder, handleFoldersChange }) {
  const [folders, setFolders] = useState(JSON.parse(localStorage.getItem('folders')) || foldersList)
  const [addInput, setAddInput] = useState('')
  const [addPopup, setAddPopup] = useState(false);
  const [name, setName] = useState();
  const [folderIndex, setFolderIndex] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('folders')) {
      localStorage.setItem('folders', JSON.stringify([...folders, foldersList]))
    }
  })

  function handleAdd() {
    const newFolder = 
      {
        name: addInput,
      }
      localStorage.setItem('folders', JSON.stringify([...folders, newFolder]))
      setFolders(JSON.parse(localStorage.getItem('folders')))
  }

  function handleChangeAddInput(e) {
    setAddInput(e.target.value);
  }

  function handleDelete(index) {
    folders.splice(index, 1)
    localStorage.setItem('folders', JSON.stringify(folders))
    setFolders(JSON.parse(localStorage.getItem('folders')))
  }

  function handleOpenPopup(id) {
    setAddPopup(true)
    setName(JSON.parse(localStorage.getItem('folders'))[id].name)
    setFolderIndex(id)
  }

  function handleClosePopup() {
    setAddPopup(false)
  }

  function handleNewName(e, id, newName) {
    e.preventDefault()
    folders[id].name = newName
    setFolders(folders)
    localStorage.setItem('folders', JSON.stringify(folders))
    handleClosePopup()
  }

  return (
    <div>
      <ul className="nav__list">
        {folders.map(({ name }, index) => (
          <li 
            className={`nav__folders ${currentFolder === index ? 'nav__folders_active' : ''}`} 
            onClick={() => handleFoldersChange(index)} key={index}>
              {name}{index > 4 ? 
              <>
                <button className="added-folders__edit-icon" onClick={() => handleOpenPopup(index)}/>
                <button className="added-folders__delete-icon"  onClick={() => handleDelete(index)}/> 
              </>: ''}
          </li>
        ))}
      </ul>
      <form className="added-folders__form" onSubmit={handleAdd}>
        <input onChange={handleChangeAddInput}/>
        <button type="submit" className="added-folders__button" />
      </form>
      {addPopup ? <Popup onClose={handleClosePopup} name={name} setName={setName} folderIndex={folderIndex} handleNewName={handleNewName}/> : ''}
    </div>
  );
}

export default NavList;
