import React from 'react';

import classes from './SectionTitle.module.scss';

const sectionTitle = props => {
  return <h2 className={classes.SectionTitle}>{props.title}</h2>;
};

export default sectionTitle;
