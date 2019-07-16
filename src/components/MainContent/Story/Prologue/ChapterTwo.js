import React from 'react';

import ChapterWrapper from '../ChapterWrapper';
import Quest from '../../../Quest/Quest';

const chapterTwo = props => {
  return (
    <ChapterWrapper>
      <Quest type='complete' name='A New Assignment' priority='main' />

      <Quest type='new' name={`Syndra's Lockbox`} priority='main'>
        Test
      </Quest>

      <Quest type='update' name={`Syndra's Lockbox`} priority='main'>
        Test
      </Quest>
    </ChapterWrapper>
  );
};

export default chapterTwo;
