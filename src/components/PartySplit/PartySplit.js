import React from 'react';

import classes from './PartySplit.module.scss';

const partySplit = props => {
  return <div className={classes.PartySplit}>{props.children}</div>;
};

export default partySplit;
