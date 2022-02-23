import PropTypes from 'prop-types';
import { FcCellPhone, FcEmptyTrash } from 'react-icons/fc';
import { ListGroup, Button, Spinner, Stack } from 'react-bootstrap';

const ContactItem = ({ id, name, number, onClick, deleting }) => {
  return (
    <ListGroup.Item as="li" variant="secondary">
      <Stack direction="horizontal" gap={3}>
        <FcCellPhone size="22px" /> <span className="ms-2">{name}:</span>{' '}
        {number}
        {deleting ? (
          <Button
            className="ms-auto"
            id={id}
            onClick={onClick}
            variant="outline-danger"
          >
            <Spinner
              animation="border"
              variant="danger"
              size="sm"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>
        ) : (
          <Button
            className="ms-auto"
            id={id}
            onClick={onClick}
            variant="outline-danger"
          >
            <FcEmptyTrash size={20} />
          </Button>
        )}
      </Stack>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactItem;
