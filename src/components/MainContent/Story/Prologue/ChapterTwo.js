import React from 'react';

import ChapterWrapper from '../ChapterWrapper';
import Quest from '../../../Quest/Quest';
import Quote from '../../../Quote/Quote';

const chapterTwo = props => {
  return (
    <ChapterWrapper>
      <Quest type='new' name={`Syndra's Lockbox`} />
      <p>
        Standing on the white marble steps of the Silvane Estate, Anton watched Zyllana stride wordlessly away from the
        group with her customary grace. He glanced at Faelthys, who returned his questioning gaze with a curt nod. Anton
        sighed internally again, his brow furrowing as he considered the wisdom of the Elven Monk's actions. Zyllana had
        long since earned Anton's trust and respect in many matters, and he hoped the reverse was also true. However,
        though he admitted their effectiveness, he could not deny an uneasiness which settled in his stomach whenever
        she met with her 'contacts'. Anton had learned personally to be wary of those who sell secrets; allegiance to
        their clients was rarely their chief concern.
      </p>

      <p>
        His wariness became surprise, however, when Faelthys announced that he would also be joining the meeting.
        Zyllana had never invited anyone to come along, her preference for working alone clear from the beginning. Anton
        was also surprised to find that his reaction was tinged with jealousy. Why should Faelthys be privy to the inner
        workings of this secretive group? The thought was quickly quashed - no need to be jealous of something you don't
        want in the first place. So lost in thought was the young archaeologist that it was several times Ilro called
        his name before he realised.
      </p>

      <p>'Sorry, what? I was thinking.' he said.</p>

      <p>'Careful, don't hurt yourself.', smirked Ilro, 'I said, what are we going to do while they're gone?'</p>

      <p>
        'Oh, umm...' Anton looked towards the gate, where the tail of Faelthys' coat could be seen rounding the corner.
        'Follow me.' he said, and strode off down the perfectly set path.
      </p>

      <Quote author='Syndra Silvane'>The Harpers are not accustomed to being kept in the dark.</Quote>
    </ChapterWrapper>
  );
};

export default chapterTwo;
