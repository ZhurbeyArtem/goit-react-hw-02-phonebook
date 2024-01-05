import React from 'react';
import ContactsItem from './ContactsItem';
import s from './style.module.css';

const ContactList = ({ users, rmUser, word }) => {
  return (
    <ul className={s.list}>
      {users.map(e => {
        if (word.length > 0) {
          if (e.name.toLowerCase().includes(word.toLowerCase()))
            return (
              <ContactsItem
                key={e.id}
                id={e.id}
                name={e.name}
                phone={e.number}
                func={rmUser}
              />
            );
          return '';
        }
        return (
          <ContactsItem
            key={e.id}
            id={e.id}
            name={e.name}
            phone={e.number}
            func={rmUser}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
