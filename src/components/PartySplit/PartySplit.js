import React from 'react';

import classes from './PartySplit.module.scss';

const PartySplit = props => {
  return <div className={classes.PartySplit}>{props.children}</div>;
};

export default PartySplit;
