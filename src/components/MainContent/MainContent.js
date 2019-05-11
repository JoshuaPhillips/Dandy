import React from 'react';

import classes from './MainContent.module.scss';

//routing
import { withRouter, Route } from 'react-router-dom';

//components
import ChapterTriage from './ChapterTriage/ChapterTriage';
import Home from './Home/Home';
import Sandbox from './Sandbox/Sandbox.js';
import OurParty from './OurParty/OurParty.js';

const mainContent = props => {
  return (
    <main className={classes.MainContent}>
      <Route path='/' exact component={Home} />
      <Route path='/sandbox' exact component={Sandbox} />
      <Route path='/characters' exact component={OurParty} />
      <Route path='/chapters/:id' component={ChapterTriage} />
    </main>
  );
};

export default withRouter(mainContent);
