import React from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactsItem}>
      {contact.name}: {contact.number}
      <button className={css.deleteBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
