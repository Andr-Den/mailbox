import { useState } from 'react';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import NavList from './components/NavList/NavList';
import MailsList from './components/MailsList/MailsList';

import './App.css';

const mailsList = [
  {
    author: 'Duolingo',
    text: 'Приветствую! Уже 13 дней ударного режима. Позанимайтесь на Duolingo сегодня, чтобы достичь 14-го дня в ударном режиме.',
    date: '18.04.2022',
    folderId: 1,
  },
  {
    author: 'LinkedIn',
    text: 'Ищите новую работу? Находите интересующие Вас вакансии. Привлекайте внимание рекрутеров. Получайте рекомендации.',
    date: '17.04.2022',
    folderId: 2,
  },
  {
    author: 'hh.ru',
    text: 'Новое сообщение от работодателя. Авторизуйтесь на сайте, чтобы просмотреть сообщение и ответить.',
    date: '15.04.2022',
    folderId: 3,
  },
  {
    author: 'Duolingo',
    text: 'Приветствую! Уже 9 дней ударного режима. Позанимайтесь на Duolingo сегодня, чтобы достичь 10-го дня в ударном режиме.',
    date: '14.04.2022',
    folderId: 1,
  },
  {
    author: 'hh.ru',
    text: 'Новое сообщение от работодателя. Авторизуйтесь на сайте, чтобы просмотреть сообщение и ответить.',
    date: '14.04.2022',
    folderId: 2,
  },
  {
    author: 'Duolingo',
    text: 'Приветствую! Уже 13 дней ударного режима. Позанимайтесь на Duolingo сегодня, чтобы достичь 14-го дня в ударном режиме.',
    date: '18.04.2022',
    folderId: 1,
  },
  {
    author: 'LinkedIn',
    text: 'Ищите новую работу? Находите интересующие Вас вакансии. Привлекайте внимание рекрутеров. Получайте рекомендации.',
    date: '17.04.2022',
    folderId: 1,
  },
  {
    author: 'Duolingo',
    text: 'Приветствую! Уже 13 дней ударного режима. Позанимайтесь на Duolingo сегодня, чтобы достичь 14-го дня в ударном режиме.',
    date: '18.04.2022',
    folderId: 1,
  },
  {
    author: 'hh.ru',
    text: 'Новое сообщение от работодателя. Авторизуйтесь на сайте, чтобы просмотреть сообщение и ответить.',
    date: '14.04.2022',
    folderId: 1,
  },
];

function App() {
  const [currentFolder, setCurrentFolder] = useState(1);
  const [mails, setMails] = useState(mailsList.filter((mail) => mail.folderId === 1));
  const [searchInput, setSearchInput] = useState('');

  function handleFoldersChange(currentFolderId) {
    const mails = mailsList.filter((mail) => mail.folderId === currentFolderId);
    setMails(mails)
    setCurrentFolder(currentFolderId)
  }

  function handleSearch(e) {
    e.preventDefault(); 
    const searchMails = mailsList.filter((mail) => (mail.author.toLowerCase().includes(searchInput.toLowerCase())) || 
      (mail.text.toLowerCase().includes(searchInput.toLowerCase())) || 
      (mail.date.toLowerCase().includes(searchInput.toLowerCase())));
    setMails(searchMails)
    setCurrentFolder('')
  }

  return (
    <div className="App">
      <Header setSearchInput={setSearchInput} handleSearch={handleSearch}/>
      <Container>
        <NavList handleFoldersChange={handleFoldersChange} currentFolder={currentFolder}/>
        <MailsList mails={mails} />
      </Container>
    </div>
  );
}

export default App;
