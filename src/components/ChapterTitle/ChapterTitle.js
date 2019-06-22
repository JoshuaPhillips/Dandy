import React from 'react';

import classes from './ChapterTitle.module.scss';

const chapterTitle = props => {
  return <h2 className={classes.ChapterTitle}>{props.title}</h2>;
};

export default chapterTitle;
