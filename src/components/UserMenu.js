import { Button } from 'react-bootstrap';

export const UserMenu = ({ name, onClick }) => {
  return (
    <>
      <p className="me-3 pt-3">Hello, {name} </p>
      <Button variant="outline-danger" onClick={onClick}>
        LogOut
      </Button>
    </>
  );
};
