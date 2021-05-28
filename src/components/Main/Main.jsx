import React from "react";
import s from "./Main.module.css";
import { Route } from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

const Main = () => {
  return (
    <main className={s.main}>
      <Route path="/profile" render={() => <ProfileContainer />} />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/users" render={() => <UsersContainer />} />
    </main>
  );
};

export default Main;
