import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';

import css from './form.module.scss';
import { addContactsThunk, getContactsThunk } from '../../redux/contact/thunk';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [localAdd, setLocalAdd] = useState({});

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(5),
      name,
      number,
    };

    dispatch(addContactsThunk(newContact));
    setLocalAdd(newContact);

    setName('');
    setNumber('');
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [localAdd]);

  return (
    <form className={css['form']} onSubmit={handleSubmit}>
      <label className={css['form__label']}>
        <p>Name </p>
        <input
          className={css['form__input']}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css['form__label']}>
        <p>Number </p>
        <input
          className={css['form__input']}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default Form;
