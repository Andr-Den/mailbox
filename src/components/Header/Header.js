import React from 'react';
import Container from '../Container/Container';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

import logo from '../../images/mail.png';

function Header({setSearchInput, handleSearch}) {
  return (
    <header className="header">
      <Container>
        <img src={logo} alt="логотип" className="header__logo" />
        <SearchForm setSearchInput={setSearchInput} handleSearch={handleSearch}/>
      </Container>
    </header>
  );
}

export default Header;
