import React from 'react';
import ContactsItem from './ContactsItem';
import s from './style.module.css';

const ContactList = ({ users, fn, word }) => {
  const removeUser = id => {
    const index = users.indexOf(users.find(e => e.id === id));
    users.splice(index, 1);
    fn([...users]);
  };

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
                phone={e.phone}
                fn={removeUser}
              />
            );
          return '';
        }
        return (
          <ContactsItem
            key={e.id}
            id={e.id}
            name={e.name}
            phone={e.phone}
            fn={removeUser}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
