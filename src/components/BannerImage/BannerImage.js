import React from 'react';

import classes from './BannerImage.module.scss';

const bannerImage = props => {
  return (
    <figure className={classes.BannerImage} style={{ backgroundImage: 'url(' + props.src + ')' }}>
      {props.caption ? <figcaption>{props.caption}</figcaption> : null}
    </figure>
  );
};

bannerImage.defaultProps = {
  alt: 'An Image',
  caption: null
};

export default bannerImage;
