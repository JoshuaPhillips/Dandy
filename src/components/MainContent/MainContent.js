import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./MainContent.module.scss";

//components
import Home from "./Home/Home";
import OurParty from "./OurParty/OurParty";

import story from "../../data/story/story";

const MainContent = props => {
  const currentSection = useSelector(state => state.currentSection);
  const currentChapter = useSelector(state => state.currentChapter);

  let CurrentChapter;
  let chapterRoute;

  if (currentSection !== null && currentChapter !== null) {
    CurrentChapter = story[currentSection].chapters[currentChapter].content;
  }

  if (!CurrentChapter) {
    chapterRoute = <Redirect to='/' />;
  }

  chapterRoute = <Route path='/:section/:chapter' component={CurrentChapter} />;

  return (
    <main className={classes.MainContent}>
      <Switch>
        {chapterRoute}
        <Route path='/' exact component={Home} />
        <Route path='/our-party' exact component={OurParty} />
      </Switch>
    </main>
  );
};

export default MainContent;
