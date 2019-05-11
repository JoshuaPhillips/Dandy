import React from 'react';

import classes from './Quest.module.scss';

const quest = props => {
  return (
    <div
      className={[
        classes.Quest,
        props.type === 'new' ? classes.New : props.type === 'update' ? classes.Update : classes.Complete
      ].join(' ')}>
      <div className={classes.QuestIcon}>
        <span role='img' aria-label='quest-icon-emoji'>
          {props.type === 'new' ? '❗' : props.type === 'update' ? '📝' : '✅'}
        </span>
      </div>
      <div className={classes.QuestDetails}>
        <h2>
          {props.type === 'new' ? 'New Quest' : props.type === 'update' ? 'Quest Updated' : 'Quest Complete'} -{' '}
          {props.name}
        </h2>
        <h4>{props.desc}</h4>
        {props.children}

        {props.rewards.length !== 0 ? (
          <div className={classes.Rewards}>
            <h2>Quest Rewards</h2>
            <ul>
              {props.rewards.map(reward => {
                return <li key={reward}>{reward}</li>;
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

quest.defaultProps = {
  rewards: []
};

export default quest;
