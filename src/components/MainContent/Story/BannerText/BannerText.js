import React from 'react';

import classes from './BannerText.module.scss';

const bannerText = props => {
  return (
    <div className={classes.BannerText}>
      <p>{props.children}</p>
    </div>
  );
};

export default bannerText;
