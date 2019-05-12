import React from 'react';

import CharacterBio from '../../CharacterBio/CharacterBio';
import SectionTitle from '../SectionTitle/SectionTitle';

import ZylannaAvatar from '../../../assets/zyllana.jpg';

import classes from './OurParty.module.scss';

const ourParty = props => {
  return (
    <div className={classes.OurParty}>
      <SectionTitle>Our Party</SectionTitle>
      <CharacterBio src={ZylannaAvatar}>
        <p>
          Having spent her life in the monastery, Zyllana's life was completely upended one day when everyone and
          everything she had known was lost in a mysterious fire. Zyllana's life was saved by a visiting member of The
          Harpers, there to recruit new talent for their organisation.
        </p>

        <p>
          Swearing revenge, Zyllana found her new-found place in the secretive institute difficult at first, and
          struggled to maintain the composure and discipline that she had been taught. However, under careful and gentle
          guidance from her tutors and peers, she began to learn patience once more. Now she is a contract spy and
          assassin for The Harpers, and one of their top infiltrators thanks to her fleet footing and graceful figure.
        </p>
      </CharacterBio>
    </div>
  );
};

export default ourParty;
