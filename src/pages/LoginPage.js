import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import Login from '../components/Login';
import Loading from 'components/Loading';

export default function LoginPage() {
  const isLoading = useSelector(authSelectors.getLoading);
  return (
    <Container>
      <Login />
      {isLoading && <Loading className="ms-3" />}
      <p className="ms-3">
        Not registered yet? <Link to="register">Click me</Link>
      </p>
    </Container>
  );
}
