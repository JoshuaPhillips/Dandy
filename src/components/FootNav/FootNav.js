import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { story } from '../../data/story';

import classes from './FootNav.module.scss';

const FootNav = props => {
  const { currentSection, currentChapter } = props;

  let prev = [];
  let next = [];

  if (currentSection === 0 && currentChapter === 0) {
    prev = null;
  } else if (currentChapter === 0) {
    prev = [currentSection - 1, story[currentSection - 1].chapters.length - 1];
  } else {
    prev = [currentSection, currentChapter - 1];
  }

  if (currentChapter + 1 > story[currentSection].chapters.length - 1 && currentSection + 1 > story.length - 1) {
    next = null;
  } else if (currentChapter + 1 > story[currentSection].chapters.length - 1 && currentSection <= story.length - 1) {
    next = [currentSection + 1, 0];
  } else {
    next = [currentSection, currentChapter + 1];
  }

  const prevLink = prev ? (
    <NavLink
      className={classes.PrevLink}
      onClick={() => props.changeChapter(prev[0], prev[1])}
      to={`/${story[prev[0]].name.toLowerCase().replace(/\s+/g, '-')}/${story[prev[0]].chapters[prev[1]].title
        .toLowerCase()
        .replace(/\s+/g, '-')}`}>
      Previous Chapter
    </NavLink>
  ) : null;

  const nextLink = next ? (
    <NavLink
      className={classes.NextLink}
      onClick={() => props.changeChapter(next[0], next[1])}
      to={`/${story[next[0]].name.toLowerCase().replace(/\s+/g, '-')}/${story[next[0]].chapters[next[1]].title
        .toLowerCase()
        .replace(/\s+/g, '-')}`}>
      Next Chapter
    </NavLink>
  ) : null;

  return (
    <div className={classes.FootNav}>
      {prevLink}
      {nextLink}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentSection: state.currentSection,
    currentChapter: state.currentChapter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeChapter: (section, chapter) =>
      dispatch({ type: 'CHANGE_CHAPTER', payload: { section: section, chapter: chapter } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FootNav);
