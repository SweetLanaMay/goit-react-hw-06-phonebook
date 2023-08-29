import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem'; // Переконайтеся, що правильно імпортуєте ContactItem
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;