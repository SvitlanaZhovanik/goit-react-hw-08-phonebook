import { Form, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../redux/contacts/selectors';
import { filterContact } from '../redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => dispatch(filterContact(e.currentTarget.value));
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label column sm={2}>
          Find contacts by name:
        </Form.Label>
        <Col xs={12} lg={4}>
          <Form.Control
            type="text"
            placeholder="Please enter the required name"
            value={filter}
            onChange={handleFilter}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};
export default Filter;
