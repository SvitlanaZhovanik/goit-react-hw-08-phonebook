import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import FormAuth from './Form/FormAuth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <FormAuth
      title="Sign in"
      handleClick={}
      isRegister={false}
    />
  );
};
export default Login;
