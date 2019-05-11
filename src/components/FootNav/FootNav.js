import React from 'react';

import classes from './FootNav.module.scss';

import { NavLink } from 'react-router-dom';

const footNav = props => {
  return (
    <div className={classes.FootNav}>
      {props.prev !== '' ? <NavLink to={'/chapters/' + props.prev}>Previous Chapter</NavLink> : null}
      {props.next !== '' ? <NavLink to={'/chapters/' + props.next}>Next Chapter</NavLink> : null}
    </div>
  );
};

export default footNav;
