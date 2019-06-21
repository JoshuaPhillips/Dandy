import React from 'react';

import classes from './PartySplitSection.module.scss';

const partySplitSection = props => {
  return (
    <div className={classes.PartySplitSection}>
      <h2>{props.characters.join(', ')}</h2>
      {props.children}
      <hr />
    </div>
  );
};

export default partySplitSection;
