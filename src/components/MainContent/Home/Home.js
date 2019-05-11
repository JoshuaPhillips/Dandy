import React from 'react';

import classes from './Home.module.scss';

import Lorem from '../../Lorem/Lorem';

const home = props => {
  return (
    <div className={classes.Home}>
      <h1>Welcome to DNDY</h1>
      <Lorem />
    </div>
  );
};

export default home;
