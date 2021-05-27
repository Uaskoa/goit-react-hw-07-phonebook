import { connect } from "react-redux";
import phonebookOperations from "../../redux/phonebook/phonebook-operations";
import ContactListItem from "./ContactListItem";
import "./ContactList.scss";
import PropTypes from "prop-types";


const ContactList = ({ contacts, onDeleteContact }) => {
  
  return (
  <ul className="contact-list">
    {contacts.map((contact) => (
      <ContactListItem
        id={contact.id}
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
)};




ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter)
  );


};

const mapStateToProps = ({ contacts:{ items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});



const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) =>
    dispatch(phonebookOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
