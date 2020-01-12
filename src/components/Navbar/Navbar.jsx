import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img src={props.avatar} alt="avatar"/><br/>
      <span>{props.name}</span>
    </div>
  );
};


const Navbar = (props) => {

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
      </div>
      <br/>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>

      <div>
        <h3>Friends</h3>
        <div className={s.friendsList}>
          {props.friends.map(user => (<Friend avatar={user.avatar} name={user.name}/>))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;