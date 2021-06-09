import React from 'react';
import s from './Main.module.css';
import { Route } from 'react-router-dom';
import { WithSuspense } from '../../hoc/WithSuspense';
import UsersContainer from './Users/UsersContainer';

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const LoginPage = React.lazy(() => import('./Login/Login'));
const Music = React.lazy(() => import('./Music/Music'));
const News = React.lazy(() => import('./News/News'));
const Settings = React.lazy(() => import('./Settings/Settings'));

const Main = () => {
  return (
    <main className={s.main}>
      <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)} />
      <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
      <Route path="/music" render={WithSuspense(Music)} />
      <Route path="/news" render={WithSuspense(News)} />
      <Route path="/settings" render={WithSuspense(Settings)} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/login" render={WithSuspense(LoginPage)} />
    </main>
  );
};

export default Main;
