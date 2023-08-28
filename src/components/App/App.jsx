import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleContactAdd = newContact => {
    dispatch(addContact(newContact));
  };

  return (
    <div className={css.container}>
      <h1 className={css.phoneBookTitle}>PhoneBook</h1>
      <PhoneBook contacts={contacts} onContactAdd={handleContactAdd} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter contacts={contacts} />
    </div>
  );
};

export default App;