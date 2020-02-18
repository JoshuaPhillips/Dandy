import React from "react";
import { connect } from "react-redux";

import ChapterTitle from "../../ChapterTitle/ChapterTitle";
import FootNav from "../../FootNav/FootNav";

import { story } from "../../../data/Story/story";

import classes from "./ChapterWrapper.module.scss";

const chapterWrapper = props => {
  const { currentSection, currentChapter } = props;

  return (
    <div className={classes.ChapterWrapper}>
      <ChapterTitle title={story[currentSection].chapters[currentChapter].title || props.title} />
      {props.children}
      <FootNav />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentSection: state.currentSection,
    currentChapter: state.currentChapter
  };
};

export default connect(mapStateToProps)(chapterWrapper);
