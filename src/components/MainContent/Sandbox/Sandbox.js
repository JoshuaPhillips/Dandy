import React from 'react';

import classes from './Sandbox.module.scss';

import Quest from '../Quest/Quest';
import Combat from '../Combat/Combat';
import LevelUp from '../LevelUp/LevelUp';
import Lorem from '../../Lorem/Lorem';
import Quote from '../Quote/Quote';
import CharacterBio from '../../CharacterBio/CharacterBio';
import PartySplit from '../PartySplit/PartySplit';
import PartySplitSection from '../PartySplit/PartySplitSection/PartySplitSection';

const sandbox = props => {
  return (
    <div className={classes.Sandbox}>
      <PartySplit>
        <PartySplitSection characters={['Zyllana', 'Anton']}>
          <Lorem />
        </PartySplitSection>
        <PartySplitSection characters={['Ilro', 'Faelthys']}>
          <Lorem />
        </PartySplitSection>
      </PartySplit>
      <CharacterBio>
        <Lorem />
      </CharacterBio>
      <Quote author='Zyllana, to Anton'>Praytime's over.</Quote>
      <LevelUp level='3' />
      <Combat result='flight' />
      <Quest
        type='complete'
        name='Find The Bullshit'
        desc='Someone wants you to find the Bullshit.'
        rewards={['Gold', 'Fame', '10 lbs. Bullshit, if you want it.']}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus velit odio, interdum sit amet felis semper,
          maximus pellentesque purus.Ut finibus est sed vulputate hendrerit.Interdum et malesuada fames ac ante
          ipsumprimis in faucibus.
        </p>
        <p>
          Aenean a enim varius, lobortis diam et, dignissim ex.Praesent non gravida est.Sed leo sem, euismod et leo sed,
          porta pharetra metus.Nunc id venenatis tortor.Integer lobortis risus nec risus venenatis rhoncus in quis
          risus.Sed purus dui, vestibulum eget mauris quis, bibendum mattis purus.
        </p>
        <p>
          Vestibulum elementum eros turpis, sit amet lobortis est mattis a.Suspendisse tristique purus libero, varius
          fermentum elit tincidunt at.Suspendisse egestas congue rutrum.Integer at velit ultrices, lobortis mi ut,
          dapibus arcu. Nam sit amet mi tincidunt, aliquet elit ut, aliquam lectus.Cras consequat leo luctus dolor
          feugiat, vel rutrum nisl rutrum.Pellentesque congue neque at augue fringilla, vel tempus risus posuere.
        </p>
      </Quest>
    </div>
  );
};

export default sandbox;
