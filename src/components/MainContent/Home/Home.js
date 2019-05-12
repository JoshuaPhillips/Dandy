import React from 'react';

import classes from './Home.module.scss';

import { NavLink } from 'react-router-dom';

const home = props => {
  return (
    <div className={classes.Home}>
      <h1>Welcome to D&amp;DY</h1>
      <p>
        D&amp;DY (Dandy) is a handy way of keeping track of all your adventures, whether they contain Dungeons, Dragons,
        both or neither. At the moment it holds the tale of The Tomb of Annihilation as we follow our brave adventurers
        through the mystical island of Chult to stop the Death Curse which plagues their home of Baldur's Gate. New
        chapters will be added as soon as I can be bothered.
      </p>

      <p>
        Click on the chapter headings in the menu on the left to skip to your favourite part, or check out{' '}
        <NavLink to='/characters'>our party</NavLink> if you want to learn more about the adventurers.
      </p>
    </div>
  );
};

export default home;
