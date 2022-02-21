import { Title } from './ContactsPage.styled';
import { useFetchContactsQuery } from './redux/contacts/contactsSlice';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactsPage() {
  const { data, error, isFetching, isError } = useFetchContactsQuery();
  return (
    <Container>
      <ToastContainer position="bottom-left" theme="colored" />
      <div>
        <Title>Phonebook</Title>
        <Form contacts={data} />
      </div>
      <Section name="Contacts">
        <Filter />
        <ContactsList
          contacts={data}
          error={error}
          isFetching={isFetching}
          isError={isError}
        />
      </Section>
    </Container>
  );
}
