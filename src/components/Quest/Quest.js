import React from 'react';

import classes from './Quest.module.scss';

const quest = props => {
  const { type, priority, name, rewards } = props;

  let title = '';
  type === 'new' ? (title += 'New ') : type === 'update' ? (title += 'Quest Updated: ') : (title += 'Quest Complete: ');

  if (type === 'new') {
    priority === 'main' ? (title += 'Main Quest: ') : (title += 'Side Quest: ');
  }

  return (
    <div
      className={[
        classes.Quest,
        type === 'new' ? classes.New : type === 'update' ? classes.Update : classes.Complete
      ].join(' ')}>
      <div className={classes.QuestIcon}>
        <span role='img' aria-label='quest-icon-emoji'>
          {type === 'new' ? '🆕' : type === 'update' ? '📝' : '✅'}
        </span>
      </div>

      <div className={classes.QuestDetails}>
        <h2>
          {title}
          {name.toUpperCase()}
        </h2>
        {props.children && <div className={classes.ChildrenWrapper}>{props.children}</div>}

        {rewards.length !== 0 ? (
          <div className={classes.Rewards}>
            <h2>Quest Rewards</h2>
            <ul>
              {rewards.map(reward => {
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
