import { Title } from './ContactsPage.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import Section from 'components/Section/Section';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import FormContact from 'components/Form/FormContact';
import { Container } from 'react-bootstrap';

export default function ContactsPage() {
  const { data, error, isFetching, isError } = useFetchContactsQuery();
  return (
    <Container>
      <div>
        <Title>Phonebook</Title>
        <FormContact contacts={data} />
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
