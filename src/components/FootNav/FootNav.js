import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import story from "../../data/story/story";

import classes from "./FootNav.module.scss";

const FootNav = props => {
  const currentSection = useSelector(state => state.currentSection);
  const currentChapter = useSelector(state => state.currentChapter);
  const dispatch = useDispatch();

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

  const generateNavLinkUrl = direction => {
    return `/${story[direction[0]].name.toLowerCase().replace(/\s+/g, "-")}/${story[direction[0]].chapters[
      direction[1]
    ].title
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  };

  const prevLink = prev ? (
    <NavLink
      className={classes.PrevLink}
      onClick={() => dispatch({ type: "CHANGE_CHAPTER", payload: { section: prev[0], chapter: prev[1] } })}
      to={generateNavLinkUrl(prev)}>
      Previous Chapter
    </NavLink>
  ) : null;

  const nextLink = next ? (
    <NavLink
      className={classes.NextLink}
      onClick={() => dispatch({ type: "CHANGE_CHAPTER", payload: { section: next[0], chapter: next[1] } })}
      to={generateNavLinkUrl(next)}>
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

export default FootNav;
