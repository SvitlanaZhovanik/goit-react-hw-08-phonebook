import Register from '../components/Register';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <>
      <ToastContainer />
      <Register />
      <p>
        Already registered? <Link to="login">Click me</Link>
      </p>
    </>
  );
}
