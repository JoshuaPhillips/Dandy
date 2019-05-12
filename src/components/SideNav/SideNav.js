import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import classes from './SideNav.module.scss';

const sideNav = props => {
  return (
    <React.Fragment>
      <aside className={classes.SideNav}>
        <Link to='/' className={classes.Header}>
          D&amp;DY
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to='/chapters/introduction'>Introduction</NavLink>
            </li>
            <li>
              <NavLink to='/chapters/1'>Chapter One: Welcome to Chult</NavLink>
            </li>
          </ul>
          <hr style={{ margin: '1rem 1rem', width: '200px' }} />
          <ul>
            <li>
              <NavLink to='/characters'>Our Party</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </React.Fragment>
  );
};

export default sideNav;
