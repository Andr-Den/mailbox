import React from 'react';
import './NavList.css';

const folders = [
  {
    id: 1,
    name: 'Входящие',
  },
  {
    id: 2,
    name: 'Отправленные',
  },
  {
    id: 3,
    name: 'Черновики',
  },
  {
    id: 4,
    name: 'Спам',
  },
  {
    id: 5,
    name: 'Корзина',
  },
];

function NavList({ currentFolder, handleFoldersChange }) {

  return (
    <ul className="nav__list">
      {folders.map(({ name, id }) => (
        <li className={`nav__folders ${currentFolder === id ? 'nav__folders_active' : ''}`} onClick={() => handleFoldersChange(id)} key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default NavList;
