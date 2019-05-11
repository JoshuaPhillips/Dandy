import React from 'react';

import BannerImage from '../BannerImage/BannerImage';
import BannerText from '../BannerText/BannerText';
import SectionTitle from '../SectionTitle/SectionTitle';
import Lorem from '../../Lorem/Lorem';
import Quote from '../Quote/Quote';
import Quest from '../Quest/Quest';
import Combat from '../Combat/Combat';
import SubTitle from '../SubTitle/SubTitle';
import LevelUp from '../LevelUp/LevelUp';
import PartySplit from '../PartySplit/PartySplit';
import PartySplitSection from '../PartySplit/PartySplitSection/PartySplitSection';
import * as tombLogo from '../../../assets/tombofannihillogo.jpg';

const introduction = props => {
  return (
    <React.Fragment>
      <BannerImage src={tombLogo} />
      <SectionTitle>Complications</SectionTitle>
      <BannerText>As with all good tales, it began with a Gnommish smuggling ring...</BannerText>
      <p>
        Looking back, Zyllana thought it probably could have gone better. After all, it was supposed to be a routine
        reconnaissance assignment. <em>Get in. Gather intel. Get out.</em> Not something she, or any of her colleagues
        for that matter, would have considered a challenge. The gnomes were clearly up to something - how else could
        they have achieved such meteoric success in such a short space of time? Zyllana couldn't remember the last time
        she had seen so many Gnommish products flood the streets of Baldur's Gate, and if her memory served her
        correctly (and it always did), their last income streams hadn't exactly held the law in high regard, nor the
        safety of the general population.
      </p>

      <p>
        However, perhaps they'd learned something from experience after all. Zyllana's employer rarely went uninformed,
        but even the intelligence gathering capabilities of The Harpers had failed to acquire anything of value through
        the traditional methods. Hence why Zyllana and her colleagues were 'requested' to lend a helping hand.
      </p>

      <p>
        Unfortunately, and inevitably, there were <em>complications</em> - as their mission report euphemistically
        attested. They always happened, and they were always dangerous. Part of the job was expecting the unexpected,
        and then being caught out and having to deal with it anyway.
      </p>
      <p>
        The complications from this particular assignment were sitting across the table from her, nursing a fresh pewter
        tankard of a dark amber liquid that somehow reminded her simultaneously of freshly cut grass and the gutters
        they'd passed on the way in.
      </p>
      <p>
        Ilro, for her part, seemed to be enjoying herself. Then again, Zyllana learned many years ago that a Druid's
        outward appearance was no reflection of their state of mind. She wondered vaguely if they had some metaphor to
        explain this away involving tree bark or something similarly saccharine, and watched the Half-Elf's pointed ears
        flicker slightly in the breeze as the oaken door to the tavern opened behind her, ushering in another group of
        travellers eager to rest their feet in the sun that streamed through the thin windows.
      </p>
      <p>
        'We should make a move soon.' said a deep voice to her right, resignation ringing in the words. The voice
        belonged to Anton, who slumped back as he spoke, as if to suggest that, his advice having been given, he could
        claim no responsibility for any lateness of the party, and could relax in peace once more. 'Don't want to keep
        Sendar waiting...' - this line cut off by a tip of the hat, obscuring his weathered face.
      </p>

      <p>
        'Once more, our contact's name is Syndra.' chided Zyllana, 'And I would advise that you get it right when we get
        there.'
      </p>

      <p>
        'Don't worry, this isn't my first assignment; I'm sure I'll dredge up my stale old airs and graces when the need
        arises.'
      </p>

      <p>
        'I'm sure. But yes, the time grows near. Before we go to the meeting, I must visit a merchant I know in the
        area; I have some purchases to make.' Zyllana's voice lowered a little as she spoke these words, and the group
        surrounding her nodded silently. Almost in unison, three of them stood up, followed shortly by Anton, after some
        rustling and murmuring from the brim of his hat. Zyllana stepped gracefully aside from the table, and was
        shortly joined by Anton, Ilro, and Faelthys - a fellow wood elf with whom Zyllana couldn't help but share a
        bond, despite the impersonal nature of their mutual employment. The group made their way back to the sun-lit
        streets, Ilro only pausing to drain her tankard before stepping through the threshold.
      </p>

      <Quest
        type='new'
        name='A New Assignment'
        desc='Head further into the Merchant District to the house of Syndra Silvane, a contact from The Harpers, to learn more of your new mission.'
      />
      <SubTitle>Baldur's Gate - Merchant District</SubTitle>

      <p>
        Ilro's hand went up to her eyes, shielding them from the bright glare of the sun which glinted off the white
        stonework of the surrounding buildings. She marvelled again at the others' ability to acclimatise so quickly to
        the changes in light - she supposed that many months and years of exploring caves and dungeons and fortresses
        would have left them with a greater control of their vision, or perhaps they were just too proud or professional
        to show any discomfort.
      </p>

      <p>
        'Fuck it's bright.' exclaimed Anton, who had screwed up his eyes in discomfort. 'Told you we should have stayed
        inside.'
      </p>

      <p>
        'I get the feeling that's not why you wanted to stay.' retorted Faelthys, a wry smirk playing at the corners of
        his mouth. 'Somehow I feel that the waitress might have had something more to do with it.'
      </p>

      <p>
        Anton opened his mouth to reply, but was quickly cut off by a gentle but firm hand from Zyllana. 'Perhaps we
        should press on?' she suggested, gesturing across the road to a side street which teemed with shouting and the
        noise of the day's trading.
      </p>

      <p>
        The group continued on in various states of satisfaction. Ilro, still unaccustomed to the lively sensations of
        the merchant district, lagged slightly, desperate to peer into every shop window, every display cabinet, every
        market stall. Distracted, and with the hustle and bustle of the streets, she barely managed to keep up with the
        rest of the group. Fortunately both of her elven companions were easy to spot, and Anton's voice was{' '}
        <em>resonant</em> to say the least.
      </p>

      <Quote author='Zyllana, to Anton'>
        Once more, our contact's name is <em>Syndra</em>, and I would advise that you get it right when we get there.
      </Quote>

      <p>
        Quite suddenly, as if by some mutual understanding, they came to a halt. 'Our contact is waiting in this shop.',
        explained Faelthys. 'We may be a small while. Anton, I assume you'd rather be occupied elsewhere?'
      </p>

      <p>
        'What, or listen to you with your fancy words and secret eyebrow wiggling?', snorted Anton, 'I think I'll pass,
        thanks. I'll see what mischief I can get into at the docks. Coming Ilro?'
      </p>

      <p>
        All three turned to look at the druid, who hesitated slightly. 'Umm...in complete honesty, perhaps the docks
        isn't the best place for me Anton. I may or may not know some people there that I wouldn't exactly be pleased to
        see me.' Her pulse quickened as she spoke - although she had quickly impressed her new colleagues with her
        skills against the gnomes, she was aware that they weren't the type to trust too easily, and she didn't want to
        mess up her chances of the closest thing she'd had to a fresh start in a long time. And she did owe them a debt,
        after all...
      </p>

      <p>
        'Suit yourself, I'll leave the elves to their secrets.' mused Anton, marching off down the hill, where the
        glimmering sheen of the Chiontar was speckled with seagulls and far-off fishing ships.
      </p>

      <PartySplit>
        <PartySplitSection characters={['Zyllana', 'Faelthys', 'Ilro']}>
          <p>
            The door swung soundlessly on its hinges as the elven trio stepped lightly into the dimly lit shop. Clearly
            the entrance was in good repair, contrary to many of the surrounding buildings, and the skills of the owner
            were exactly why they had come here.
          </p>
          <p>
            The walls gleamed with freshly sharpened swords, daggers with intricate patterns gilded into the handles,
            and a few hefty-looking morningstars which threatened to draw blood at the slightest touch.
          </p>

          <p>
            Behind the low, wooden counter stood a stout, muscular man with cropped, auburn hair and a beard glistening
            with jewellery and semi-precious stones. He wore a heavy black apron over a smoke-stained white tunic, and,
            glancing briefly at his three new customers, set aside the dagger he was inspecting, carefully laying it
            upon a silken cloth.
          </p>

          <p>
            'Good afternoon!' he said, in a bright, cheery voice that was born of years of practice. 'What brings you to
            Merdor's humble workshop today? Come in, come in!'. He beckoned with a large, calloused hand before folding
            his arms and beaming as Zyllana and Faelthys approached him. Ilro had once again become enthralled with the
            glimmer of the merchandise, earning an approving smile from the owner.
          </p>

          <p>
            'Good afternoon. I was hoping that you might sell me some specialist supplies.' said Zyllana politely. After
            a quick, casual glance around the shop, she continued 'A trickster fooled me once, and I'd prefer it didn't
            happen again.'
          </p>

          <p>
            An ordinary passerby might have thought this a strange turn of phrase, even for an elf. Faelthys, however,
            having taken up a casual lean against the counter, smiled slightly as he recognised the meaning woven into
            his colleague's speech. The language of the Harpers' cant was among the first things he had been taught, all
            those years ago. After all, <em>'One can never have too much information.'</em>
          </p>

          <p>
            A flicker of recognition passed across the merchant's face, and the practised smile vanished. However, his
            manner remained polite and professional as he pulled a small silver key from a chain around his neck and
            inserted it into a small opening in the side of the counter top.
          </p>

          <p>
            The entire shop reverberated with a satisfying <em>thunk</em> as Merdor turned the key. He reached beneath
            the counter and hefted a shallow wooden tray into view. The items inside were arranged with painstaking
            precision, and were clearly flawlessly crafted, just like his regular wares.
          </p>

          <p>
            Faelthys turned to look at the new additions to the shop's stock. He recognised piles of coins from remote
            areas or unusual currencies, worth less than the fabric on which they rested. He saw leather cases filled
            with coloured powders and waxes - perfect for replacing one's face with another. Finally, he saw a small,
            leather wallet, folded in the middle, hidden away in one corner of the box. It was this pouch which Zyllana
            reached for with a graceful hand, opening it up upon the counter.
          </p>

          <p>
            Inside the pouch were several thin, sharp metallic objects, each nestled inside their own leather holster.
            Across the top lay a slightly thicker metal bar, bent ninety degrees at one end, square and flat. Although
            Faelthys had not had much need for such equipment, he knew that the same could not be said of his companion.
          </p>

          <p>
            'Twenty-five gold pieces for the set, case included.' said Merdor flatly. For a short while, neither elf
            responded. Then, Zyllana's crisp voice broke the silence. 'Fifteen.'
          </p>

          <p>
            'You know that's not even close to reasonable. I could cut it down to twenty, given your employer's previous
            help. Final offer. I've got a workshop to maintain, not to mention keeping stuff like this doesn't exactly
            leave me risk-free.'
          </p>

          <p>
            Faelthys didn't move his gaze from the tray as he whispered 'I'm sure we could find the rest, or come back
            after speaking to our contact?'
          </p>

          <p>'Perhaps.', admitted Zyllana, 'but alternatively... Ilro, have you your coin purse with you?'</p>

          <p>The half-elf turned with an inquisitive look. 'Yes, right here. Why? Do you need something?'</p>

          <p>
            'Could you see your way to parting with five gold pieces? I assure you it would be paid back in full. I hate
            to ask, but the purchase is important.'
          </p>

          <p>
            'Of course. No problem.' replied Ilro, reaching down to a cloth drawstring bag tied tightly around her
            waist. Zyllana did the same at her own belt, dropping her purse deliberately on the counter. 'Thank you. I trust this
            will be sufficient?' - this last question directed at Merdor, who was looking at the group with a confused expression.
          </p>

          <p>The blacksmith weighed the pouch thoughtfully in his hand, as well as counting the five shining coins from Ilro. 'Aye, that'll do nicely.' he said finally. 'Anyhting else?' The professionalism and friendliness in his tone was nowhere to be found anymore; he'd had enough.</p>
        </PartySplitSection>
        <PartySplitSection characters={['Anton']}>
          <p>Did some other things.</p>
        </PartySplitSection>
      </PartySplit>

      <Lorem />
      <Lorem />
      <Quote author='Zyllana'>Praytime's over...</Quote>
      <Lorem />
      <Combat />
      <Lorem />
      <Quest type='complete' name="Syndra's Lockbox" desc='Recover some stolen items for Syndra. c'>
        <Lorem />
      </Quest>
      <LevelUp level='2' />
    </React.Fragment>
  );
};

export default introduction;
