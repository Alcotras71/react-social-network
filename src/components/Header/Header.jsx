import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import photo from '../../assets/images/fake.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://assets.awwwards.com/awards/images/2015/08/yondr-awwwards-logos-4.gif"
        alt="logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.header__success}>
            <img src={props.photo ? props.photo : photo} alt="mysefl" />
            <h1>{props.login}</h1>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
