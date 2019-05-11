import React from 'react';

import classes from './BannerText.module.scss';

const bannerText = props => {
  return <p className={classes.BannerText}>{props.children}</p>;
};

export default bannerText;
