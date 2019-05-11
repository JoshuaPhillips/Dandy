import React from 'react';

import CharacterBio from '../../CharacterBio/CharacterBio';
import SectionTitle from '../SectionTitle/SectionTitle';

import ZylannaAvatar from '../../../assets/zyllana.jpg';

const ourParty = props => {
  return (
    <React.Fragment>
      <SectionTitle>Our Party</SectionTitle>
      <CharacterBio src={ZylannaAvatar} />
    </React.Fragment>
  );
};

export default ourParty;
