import React from 'react';
import './SearchForm.css';

import search from '../../images/search.svg';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <img src={search} alt="поиск" className="search-form__icon" />
        <form className="search-form__search">
          <input className="search-form__input" placeholder="Поиск по письмам" />
          <button type="submit" className="search-form__button" />
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
