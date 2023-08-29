import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors'
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleContactAdd = newContact => {
    dispatch(addContact(newContact));
  };

  return (
    <div className={css.container}>
      <h1 className={css.phoneBookTitle}>PhoneBook</h1>
      <PhoneBook onContactAdd={handleContactAdd}/>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter  />
    </div>
  );
};

export default App;
