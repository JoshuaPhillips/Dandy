import React from 'react';

import classes from './CharacterBio.module.scss';

const characterBio = props => {
  const { avatar, alt, name, race, playerClass } = props.character;

  return (
    <div className={classes.CharacterBio}>
      <figure>
        <img src={avatar} alt={alt} />
      </figure>
      <div>
        <h2>{name}</h2>
        <h4>
          {race} {playerClass}
        </h4>
        {props.children}
      </div>
    </div>
  );
};

export default characterBio;
