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

  const mails = (currentFolder) => mailsList.filter((mail) => mail.folderId === currentFolder);

  return (
    <div className="App">
      <Header />
      <Container>
        <NavList currentFolder={currentFolder} setCurrentFolder={setCurrentFolder} />
        <MailsList mails={mails(currentFolder)} />
      </Container>
    </div>
  );
}

export default App;
