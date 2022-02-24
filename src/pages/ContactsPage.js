import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import FormContact from 'components/Form/FormContact';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';

export default function ContactsPage() {
  const { data, error, isFetching, isError } = useFetchContactsQuery();
  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <FormContact contacts={data} />
      </div>
      <Container className="mt-4">
        <h2>Contacts</h2>
        <Filter />
        <ContactsList
          contacts={data}
          error={error}
          isFetching={isFetching}
          isError={isError}
        />
      </Container>
      <ToastContainer position="top-center" />
    </Container>
  );
}
