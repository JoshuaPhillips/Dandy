import React from 'react';

import classes from './Quest.module.scss';

const Quest = props => {
  const { type, name } = props;
  let typeText;
  let subClass;

  switch (type) {
    case 'new':
      typeText = 'Quest Added';
      subClass = classes.New;
      break;

    case 'update':
      typeText = 'Quest Updated';
      subClass = classes.Update;
      break;

    case 'complete':
      typeText = 'Quest Completed';
      subClass = classes.Complete;
      break;

    default:
      break;
  }

  return (
    <div className={[classes.Quest, subClass].join(' ')}>
      <div className={classes.QuestTypeContainer}>
        <p>{typeText}</p>
      </div>
      <div className={classes.QuestNameContainer}>
        <p>{name.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Quest;
