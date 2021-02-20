import React from 'react';
import s from './Main.module.css';
import {Route} from "react-router-dom";
import Profile from './Profile/Profile';
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Main = (props) => {
  return (
    <main className={s.main}>
      <Route path='/profile'
             render={() => <Profile
               store={props.store}/>}/>
      <Route path='/dialogs'
             render={() => <DialogsContainer
               store={props.store}/>}/>
      <Route path='/music'
             render={() => <Music/>}/>
      <Route path='/news'
             render={() => <News/>}/>
      <Route path='/settings'
             render={() => <Settings/>}/>
    </main>
  );
}

export default Main;