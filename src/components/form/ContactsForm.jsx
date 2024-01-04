import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import s from './style.module.css';

const ContactsForm = ({ users, fn }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const err = users.filter(e => e.name === name || e.phone === phone);
    if (err.length > 0) {
      Notify.failure(`${name} or ${phone} is already in contacts`);
      return;
    }
    const id = nanoid();
    fn([...users, { name, phone, id }]);
    e.target.reset();
    setPhone('');
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.formLabel}>
          Name
          <input type="text" onInput={e => setName(e.target.value)} />
        </label>
        <label className={s.formLabel}>
          Number
          <input type="tel" onInput={e => setPhone(e.target.value)} />
        </label>

        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
