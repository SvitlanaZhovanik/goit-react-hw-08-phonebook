import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/react';

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
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
);

export default function App() {
  return (
    <Suspense
      fallback={
        <CircleLoader
          color={'#0d6efd'}
          css={css`
            margin: 30% 45%;
            display: block;
          `}
          size={150}
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
