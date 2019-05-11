import React from 'react';

import Introduction from '../Chapters/Introduction';
import ChapterOne from '../Chapters/ChapterOne';
import ChapterTwo from '../Chapters/ChapterTwo';

import FootNav from '../../FootNav/FootNav';

import classes from './ChapterTriage.module.scss';

const chapters = [Introduction, ChapterOne, ChapterTwo];

const chapterTriage = props => {
  let CurrentChapter;
  let prev;
  let next;
  let param = props.match.params.id;

  if (param === 'introduction') {
    CurrentChapter = chapters[0];
    prev = '';
    next = '1';
  } else {
    CurrentChapter = chapters[param];
    prev = +param - 1 + '';
    next = +param + 1 + '';
  }

  if (param === '1') {
    prev = 'introduction';
  }

  if (+param === chapters.length - 1) {
    next = '';
  }

  return (
    <div className={classes.ChapterWrapper}>
      <CurrentChapter />
      <FootNav prev={prev} next={next} />
    </div>
  );
};

export default chapterTriage;
