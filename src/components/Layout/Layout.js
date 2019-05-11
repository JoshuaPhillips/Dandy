import React, { Component } from 'react';

import classes from './Layout.module.scss';

//components
import SideNav from '../SideNav/SideNav';
import MainContent from '../MainContent/MainContent';

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <SideNav />
        <MainContent />
      </div>
    );
  }
}

export default Layout;
