import ContactItem from 'components/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <ul className={css.contactsList}>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
