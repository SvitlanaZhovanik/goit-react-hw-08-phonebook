import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const FormAuth = ({ title, buttonName, handleClick, isRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleClick(email, password, name);
    setEmail('');
    setPassword('');
    setName('');
  };
  return (
    <Container className="mt-4 mb-5">
      <h1 className="mb-5">{title}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        {isRegister && (
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Your name"
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {buttonName}
        </Button>
      </Form>
    </Container>
  );
};
export default FormAuth;
