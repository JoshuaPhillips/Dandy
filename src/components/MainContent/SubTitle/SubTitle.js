import React from 'react';

import classes from './SubTitle.module.scss';

const subTitle = props => {
  return <h3 className={classes.SubTitle}>{props.children}</h3>;
};

export default subTitle;
