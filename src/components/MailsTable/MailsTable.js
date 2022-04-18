import React from 'react';
import './MailsTable.css';

function MailsTable({ mails, onClick }) {
  return (
    <tbody>
      {mails.map((item, index) => (
        <tr className="table__items" key={index} onClick={() => onClick(item)}>
          <td className="table__autor">{item.author}</td>
          <td className="table__text">{item.text}</td>
          <td className="table__date">{item.date}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default MailsTable;
