import React from "react";
import { useSelector } from "react-redux";

import ChapterTitle from "../../../ChapterTitle/ChapterTitle";
import FootNav from "../../../FootNav/FootNav";

import story from "../../../../data/story/story";

import classes from "./ChapterWrapper.module.scss";

const ChapterWrapper = props => {
  const currentSection = useSelector(state => state.currentSection);
  const currentChapter = useSelector(state => state.currentChapter);

  return (
    <div className={classes.ChapterWrapper}>
      <ChapterTitle title={story[currentSection].chapters[currentChapter].title || props.title} />
      {props.children}
      <FootNav />
    </div>
  );
};

export default ChapterWrapper;
