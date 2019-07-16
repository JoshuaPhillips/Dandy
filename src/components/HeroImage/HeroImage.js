import React from 'react';

import classes from './HeroImage.module.scss';

const heroImage = props => {
  return <figure className={classes.BannerImage} style={{ backgroundImage: 'url(' + props.src + ')' }} />;
};

export default heroImage;
