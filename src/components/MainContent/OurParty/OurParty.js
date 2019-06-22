import React from 'react';

import CharacterBio from '../../CharacterBio/CharacterBio';
import ChapterTitle from '../../ChapterTitle/ChapterTitle';

import { characterBios } from '../../../data/characters.js';

import classes from './OurParty.module.scss';

const ourParty = props => {
  return (
    <div className={classes.OurParty}>
      <ChapterTitle title={'Our Party'} />
      <CharacterBio character={characterBios.zyllana}>
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
      <CharacterBio character={characterBios.ilro}>
        <p>
          Rejected by the members of her Elven heritage, Ilro found some little solace in the company of her human
          brethren. The cool sea airs of her homeland helped to channel her burgeoning powers and soon a natural
          connection formed with local marine life.
        </p>

        <p>
          However, the humans had never fully accepted her, and Ilro retreated further and further into her arts,
          eventually shunning the company of other races entirely. Fleeing to the coast, Ilro sought to learn her own
          path, her knowledge developing in step with a bitter and twisted outlook on life.
        </p>

        <p>
          Her devious mindset and loose morals quickly made her an enemy of the local townsfolk, including a Gnommish
          smuggling ring, who threw her in a cage, destined to be sold to the highest bidder. She had all but given up
          hope, when the ring was raided by a team of Harper agents, seeking to put an end to the nefarious activites of
          the Gnomes.
        </p>

        <p>
          Her faith in others at least partially renewed, Ilro travels with the team, feeling it her duty to pay off the
          life debt and kindess that she has so rarely received.
        </p>
      </CharacterBio>
      <div className={classes.Copyright}>
        <p>All rights to any artwork featured belong wholly to their respective creators.</p>
      </div>
    </div>
  );
};

export default ourParty;
