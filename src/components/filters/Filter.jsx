import React from 'react';
import s from './style.module.css';

const Filter = ({ fn }) => {
  return (
    <div className={s.container}>
      <label className={s.formLabel}>
        Find contact by name
        <input type="text" onInput={e => fn(e.target.value)} />
      </label>
    </div>
  );
};

export default Filter;
