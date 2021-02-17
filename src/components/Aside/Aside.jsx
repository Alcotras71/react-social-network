import React from 'react';
import s from './Aside.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Aside = (props) => {
  let friends = props.sidebar.friends
    .map(f => (<Friends key={f.id} name={f.name}/>));
  return (
    <aside className={s.aside}>
      <nav className={s.nav}>
        <ul>
          <li className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
          </li>
        </ul>
      </nav>
      <div className={s.friends}>
        <h2>
          Friends
        </h2>
        <div className={s.friendsWrapper}>
          {friends}
        </div>
      </div>
    </aside>
  );
}

export default Aside;