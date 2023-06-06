import Form from './_01-form';
import Filter from './_02-filter';
import List from './_03-List';
import css from '../app.module.scss';

import { addContactApi, deleteContactApi, getContactApi } from 'services/getContact';
import { getContactsThunk } from 'redux/contact/thunk';
import { useDispatch } from 'react-redux';


const App = () => {

	async function testGetContactApi() {
		try {
		  const contacts = await getContactApi();
		  console.log('get', contacts);
		  // Handle the returned contacts data
		} catch (error) {
		  console.error('Failed to fetch contacts:', error);
		  // Handle the error
		}
	  }
	  
	  testGetContactApi();



  return (
    <div className={css['vrapper']}>
      <h1 className={css['vrapper__title']}>Phonebook</h1>
      <Form />
      <h2 className={css['vrapper__title']}>Contacts</h2>
      <Filter />
      <List />
    </div>
  );
};

export default App;