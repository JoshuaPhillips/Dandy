import React from 'react';

import classes from './CharacterBio.module.scss';

const characterBio = props => {
  return (
    <div className={classes.CharacterBio}>
      <figure>
        <img src={props.src} alt={props.alt} />
      </figure>
      <div>
        <h2>
          {props.name} (Level {props.level})
        </h2>
        <h4>
          {props.race} {props.class}
        </h4>
        {props.children}
      </div>
    </div>
  );
};

characterBio.defaultProps = {
  src: '',
  alt: '',
  name: 'Zyllana',
  level: 2,
  class: 'Monk',
  race: 'Wood Elf'
};

export default characterBio;
