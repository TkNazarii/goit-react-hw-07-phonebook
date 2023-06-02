import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/contact/contactSlice';

import css from './list.module.scss';

const List = () => {

const { contacts } = useSelector((state) => state.allContacts)
const { value } = useSelector((state) => state.filterValue)

// console.log(value);

const dispatch = useDispatch();

const deleteItem = id => {
    const newData = contacts.filter(item => item.id !== id);

	dispatch(delContact(newData));
  };

  return (
    <ul className={css['list']}>
      {contacts
        .filter(item => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        })
        .map(item => {
          return (
            <li className={css['list__item']} key={item.id}>
              {item.name}: {item.number}
              <button type="button" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default List;
