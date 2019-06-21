import React from 'react';

import classes from './LevelUp.module.scss';

const levelUp = props => {
  return (
    <div className={classes.LevelUp}>
      <span role='img' aria-label='level-up-icon'>
        🎉
      </span>

      <h1>Welcome to Level {props.level}</h1>
      <span role='img' aria-label='level-up-icon'>
        🎉
      </span>
    </div>
  );
};

export default levelUp;
