import ContactsForm from './form/ContactsForm'
import Filter from './filters/Filter'
import ContactList from './contacts/ContactList'
import { useState } from 'react';

export const App = () => {
  const [users, setUsers] = useState([
    { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
  ]);
 
  const [word, setWord] = useState('')

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm users={users} fn={setUsers} />

      <h2>Contacts</h2>
      <Filter fn={setWord} />
      <ContactList users={users} fn={setUsers} word={ word } />
    </div>
  );
};
