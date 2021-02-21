import React from 'react';
import s from './Aside.module.css';
import Friends from "./Friends/Friends";
import Navigation from "./Navigation/Navigation";

const Aside = (props) => {
  let friends = props.sidebar.friends
      .map(f => (<Friends key={f.id} name={f.name}/>));

  return (
    <aside className={s.aside}>
      <nav className={s.nav}>
        <Navigation/>
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