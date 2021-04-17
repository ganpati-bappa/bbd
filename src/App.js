import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './scss/default.scss';

import AuthPage from './pages/AuthPage';
import SingupPage from './pages/SingupPage';
import Header from './components/Header';

const PrivateRoute = ({ component: Component, isLogin }) => {
  if (!isLogin) {
    return <Redirect to='/auth' />;
  }
  return <Component />;
};

export default function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/auth' component={AuthPage} />
        <Route path='/singup' component={SingupPage} />

        <PrivateRoute
          path={'/dashboard'}
          component={DashboardPage}
          isLogin={isLogin}
        />
        <PrivateRoute
          path='/organizecamp'
          component={OrganizeCampPage}
          isLogin={isLogin}
        />
        <PrivateRoute
          path='/becomedonor'
          component={BecomeDonorPage}
          isLogin={isLogin}
        />
        <PrivateRoute
          path='/regbloodbank'
          component={RegBloodBankPage}
          isLogin={isLogin}
        />
      </Switch>
    </BrowserRouter>
  );
}
