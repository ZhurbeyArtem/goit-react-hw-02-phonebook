import React, { useState } from 'react';

import s from './style.module.css';

const ContactsForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addUser(name, phone);
    setPhone('');
    setName('');
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.formLabel}>
          Name
          <input type="text" required onInput={(e) => setName(e.target.value)}/>
        </label>
        <label className={s.formLabel}>
          Number
          <input type="tel" required onInput={(e) => setPhone(e.target.value)}/>
        </label>

        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
