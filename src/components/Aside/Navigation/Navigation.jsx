import React from 'react';
import s from './../Aside.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <>
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
        <li>
          <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
        </li>
      </ul>

    </>
  )
}

export default Navigation;