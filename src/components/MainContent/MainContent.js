import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./MainContent.module.scss";

//components
import Home from "./Home/Home";
import OurParty from "./OurParty/OurParty";

import story from "../../data/story/story";

const mainContent = props => {
  const { currentSection, currentChapter } = props;
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

const mapStateToProps = state => {
  return {
    currentSection: state.currentSection,
    currentChapter: state.currentChapter
  };
};

export default connect(mapStateToProps)(withRouter(mainContent));
