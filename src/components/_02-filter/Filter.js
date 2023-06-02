import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilterValue } from 'redux/filter/filterSlice';

import debounce from 'lodash.debounce';

import css from './filter.module.scss'


const Filter = () => {

	const dispatch = useDispatch()

  const handleValue = evt => {
	const inputValue = evt.target.value
	dispatch(changeFilterValue(inputValue));
  };

    return (
        <label className={css['filter']}>
          <p>Find contacts by name{' '}</p>
          <input
		 	 className={css['filter__input']}
            // value={this.state.value}
            type="text"
            placeholder="Find by name..."
            onChange={debounce(handleValue, 1000)}
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>

    );
  }




export default Filter;
