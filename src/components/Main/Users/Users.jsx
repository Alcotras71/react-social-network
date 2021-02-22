import React from 'react';
import style from './Users.module.css'

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, photoUrl: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/133359597/original/f3ce82979871d5107dbe8e5417f5e829b3b24da0/design-you-a-custom-avatar-logo-design-in-hours.png',
        followed: false, fullName: 'Vladik', status: 'I am looking for a Job right now', location:{country: 'Russia', city: 'Tula'}},
      {id: 2, photoUrl: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
        followed: true, fullName: 'Jessica', status: 'Pretty woman', location:{country: 'USA', city: 'NY'}},
      {id: 3, photoUrl: 'https://image.flaticon.com/icons/png/512/194/194938.png',
        followed: false, fullName: 'Anton', status: 'Rules. my rules', location:{country: 'Russia', city: 'Moscow'}},
      {id: 4, photoUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png',
        followed: true, fullName: 'Kusenbek', status: 'Rafter ,rfaaa,rfaaaaa', location:{country: 'Ukraine', city: 'Kiev'}},
    ])
  }

  return (<div className={style.content}>{
    props.users.map(u => <div className={style.card} key={u.id}>
      <div className={style.image}>
        <div>
          <img src={u.photoUrl}/>
        </div>
        <div>
          { u.followed
            ? <button onClick={ () => { props.unfollow(u.id) }}>Unfollow</button>
            : <button onClick={ () => { props.follow(u.id) }}>Follow</button>}
        </div>
      </div>
      <div className={style.description}>
        <div>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </div>
        <div>
          <div>{u.location.city}</div>
          <div>{u.location.country}</div>
        </div>
      </div>
    </div>)

  }</div>);
}

export default Users;