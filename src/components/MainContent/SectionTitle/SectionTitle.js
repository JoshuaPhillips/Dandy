import React from 'react';

import classes from './SectionTitle.module.scss';

const sectionTitle = props => {
  return <h2 className={classes.SectionTitle}>{props.children}</h2>;
};

export default sectionTitle;
