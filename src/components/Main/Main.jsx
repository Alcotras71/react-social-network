import React from 'react';
import s from './Main.module.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { WithSuspense } from '../../hoc/WithSuspense';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const LoginPage = React.lazy(() => import('./Login/Login'));
const Music = React.lazy(() => import('./Music/Music'));
const News = React.lazy(() => import('./News/News'));
const Settings = React.lazy(() => import('./Settings/Settings'));

const Main = () => {
  return (
    <main className={s.main}>
      <Switch>
        <Redirect exact from="/" to="/profile" />

        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

        <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />

        <Route path="/music" render={WithSuspense(Music)} />

        <Route path="/news" render={WithSuspense(News)} />

        <Route path="/settings" render={WithSuspense(Settings)} />

        <Route path="/users" render={() => <UsersContainer />} />

        <Route path="/login/facebook" render={() => <div>Facebook</div>} />

        <Route path="/login" render={WithSuspense(LoginPage)} />

        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </main>
  );
};

export default Main;
