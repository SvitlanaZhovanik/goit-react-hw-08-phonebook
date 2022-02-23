import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperation from 'redux/auth/authOperations';

const AppBar = lazy(() =>
  import('./components/AppBar' /* webpackChunkName: "appBar-page" */)
);
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */)
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */)
);
const ContactsPage = lazy(() =>
  import(
    'pages/contactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  )
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <ClockLoader
          color={'#0d6efd'}
          css={css`
            margin: 5% 50%;
            display: block;
          `}
          size={100}
        />
      }
    >
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
