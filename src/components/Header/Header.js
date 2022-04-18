import React from 'react';
import Container from '../Container/Container';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

import logo from '../../images/mail.png';

function Header() {
  return (
    <header className="header">
      <Container>
        <img src={logo} alt="логотип" className="header__logo" />
        <SearchForm />
      </Container>
    </header>
  );
}

export default Header;
