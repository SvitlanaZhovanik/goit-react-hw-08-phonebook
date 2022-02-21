import Login from '../components/Login';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <ToastContainer />
      <Login />
      <p>
        Not registered yet?
        <Link to="register">Click Me</Link>
      </p>
    </>
  );
}
