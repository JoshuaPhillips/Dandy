import React from 'react';

import classes from './Combat.module.scss';

const combat = props => {
  return (
    <div className={classes.Combat}>
      <div>
        <h2>Combat</h2>
        <span>{props.opponents.join(', ')}</span>
      </div>

      <span role='img' aria-label='combat-result' className={classes.Result}>
        {props.result === 'victory' ? '⭐' : props.result === 'flight' ? '😨' : '💀'}
      </span>
      <p>{props.result === 'victory' ? 'Victory!' : props.result === 'flight' ? 'Escape!' : 'Defeat!'}</p>
    </div>
  );
};

combat.defaultProps = {
  result: 'victory',
  opponents: ['3 Bandits', '1 Bandit Leader']
};

export default combat;
