import React from 'react';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Dialogs from "./Dialogs/Dialogs";
import Route from "react-router-dom";


const Main = () => {
  return (
    <main className={s.main}>
      <Route component={Profile}/>
      <Route component={Dialogs}/>
      <Dialogs/>
    </main>
  );
}

export default Main;