import React from 'react';

import classes from './Quote.module.scss';

const quote = props => {
  return (
    <div className={classes.Quote}>
      <blockquote cite={props.author}>{props.children}</blockquote>
    </div>
  );
};

quote.defaultProps = {
  author: 'Unknown'
};

export default quote;
