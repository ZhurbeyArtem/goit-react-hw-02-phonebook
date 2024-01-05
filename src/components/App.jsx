import ContactsForm from './form/ContactsForm';
import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import Filter from './filters/Filter';
import ContactList from './contacts/ContactList';
import s from 'index.module.css'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addUser = (name, phone) => {
    const err = this.state.contacts.filter(
      e => e.name === name || e.phone === phone
    );
    if (err.length > 0) {
      Notify.failure(`${name} or ${phone} is already in contacts`);
      return;
    }
    const id = nanoid();

    const newContact = { id, name, number: phone };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  removeUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = (val) => {
    this.setState({ filter: val})
}

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={s.app}>
        <h1>Phonebook</h1>
        <ContactsForm addUser={this.addUser} />

        <h2>Contacts</h2>
        <Filter filterFunc={this.setFilter} />
        <ContactList users={contacts} rmUser={this.removeUser} word={filter} />
      </div>
    );
  }
}
