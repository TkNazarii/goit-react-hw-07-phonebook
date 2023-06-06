import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContactsThunk,
  deleteContactsThunk,
} from '../../redux/contact/thunk';
import css from './list.module.scss'

const List = () => {
  const value = useSelector(state => state.filterValue.value);
  const items = useSelector(state => state.allContacts.items);
  const dispatch = useDispatch();
  const [localItems, setLocalItems] = useState([]); // Локальний стан для зберігання списку елементів

useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    setLocalItems(items); // Оновлення локального стану після зміни списку елементів у Redux Store
  }, [items]);

const handleDelete = id => {
    dispatch(deleteContactsThunk(id)); //видадяє з бази

    const filteredItems = localItems.filter(item => item.id !== id);
    setLocalItems(filteredItems); // Оновлюємо локальний стан з новим списком елементів
  };

  return (
    <ul>
      {localItems
        .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        .map(item => (
          <li className={css['list__item']} key={item.id}>
            {item.name}: <br/>{item.number}
            <button type="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default List;

// import css from './list.module.scss';
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getContactsThunk, deleteContactsThunk } from "../../redux/contact/thunk";

// const List = () => {

// const value = useSelector((state) => state.filterValue.value);
// const statee = useSelector((state) => state.allContacts);
// const { items, contacts} = useSelector((state) => state.allContacts);
// console.log('statee', statee);
// // console.log('items', items);
// // console.log('value', value);

// const [updateList, setUpdateList] = useState(false);

//   const dispatch = useDispatch();

//   // Запит повертає масив з бази
//   useEffect(() => {
//     dispatch(getContactsThunk());
//   }, [dispatch]);

//   const deleteItem = (id) => {
//     dispatch(deleteContactsThunk(id));
// 	setUpdateList(true);
//   };

//   useEffect(() => {
//     if (updateList) {
//       dispatch(getContactsThunk());
//       setUpdateList(false);
//     }
//   }, [dispatch, updateList]);

//   return (
//     <ul className={css.list}>

//        {items
// 	   .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
//         .map((item) => (
//           <li className={css.list__item} key={item.id}>
//             {item.name}: {item.number}
//             <button type="button" onClick={() => deleteItem(item.id)}>
//               Delete
//             </button>
//           </li>
//         ))}

// 		{/* <li>asasd</li> */}
// 	</ul>
//   );
// };

// export default List;
