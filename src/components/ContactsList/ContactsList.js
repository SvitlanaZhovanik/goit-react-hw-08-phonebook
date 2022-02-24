import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import ClockLoader from 'react-spinners/ClockLoader';
import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice';
import { ListGroup, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, error, isFetching, isError }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const contactsNormalize = getVisibleContacts();
  const handleDeleteContact = event => {
    deleteContact(event.currentTarget.id);
  };
  return (
    <Col xs={12} lg={4}>
      {isFetching && <ClockLoader color="#0d6efd" />}
      {isError &&
        toast.error(`${error.data} Sorry, something went wrong. Try later`)}
      {contacts && !isFetching && !isError && (
        <ListGroup as="ul">
          {contactsNormalize.map(({ id, name, number }) => {
            return (
              <ContactItem
                onClick={handleDeleteContact}
                deleting={isDeleting}
                key={id}
                id={id}
                name={name}
                number={number}
              />
            );
          })}
        </ListGroup>
      )}
    </Col>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.object,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
