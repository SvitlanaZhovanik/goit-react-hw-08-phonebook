import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container className="mt-4">
      {isLoggedIn ? (
        <h1>
          Welcome, {name}. To work with Contacts go to
          <Link to="contacts"> Contacts </Link>
        </h1>
      ) : (
        <>
          <h1>Hello</h1>
          <p>
            To use the application, you must
            <Link to="register"> register </Link>
            or
            <Link to="Login"> login </Link>
          </p>
        </>
      )}
    </Container>
  );
}
