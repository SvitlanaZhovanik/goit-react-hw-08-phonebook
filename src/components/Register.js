import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormAuth from './Form/FormAuth';

const Register = () => {
  const navigate = useNavigate();

  return (
    <FormAuth
      title="Register"
      handleClick={}
      isRegister={true}
    />
  );
};

export default Register;
