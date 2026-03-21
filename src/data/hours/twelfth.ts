// Twelfth Hour (Compline) - Before Sleep
// Theme: The Burial of Christ, preparation for sleep as a symbol of death

import { AgpeyaHour, Prayer } from '../../types';

const psalms: Prayer[] = [
  {
    id: 'psalm-128',
    title: 'Psalm 128 (129)',
    subtitle: 'Endurance Under Persecution',
    content: [
      'Many a time they have afflicted me from my youth, let Israel now say;',
      'Many a time they have afflicted me from my youth; yet they have not prevailed against me.',
      'The plowers plowed upon my back; they made their furrows long.',
      'The Lord is righteous; He has cut in pieces the cords of the wicked.',
    ],
  },
  {
    id: 'psalm-130',
    title: 'Psalm 130 (131)',
    subtitle: 'Childlike Trust',
    content: [
      'Lord, my heart is not haughty, nor my eyes lofty. Neither do I concern myself with great matters, nor with things too profound for me.',
      'Surely I have calmed and quieted my soul, like a weaned child with his mother; like a weaned child is my soul within me.',
      'O Israel, hope in the Lord from this time forth and forever.',
    ],
  },
  {
    id: 'psalm-132',
    title: 'Psalm 132 (133)',
    subtitle: 'The Beauty of Unity',
    content: [
      'Behold, how good and how pleasant it is for brethren to dwell together in unity!',
      'It is like the precious oil upon the head, running down on the beard, the beard of Aaron, running down on the edge of his garments.',
      'It is like the dew of Hermon, descending upon the mountains of Zion; for there the Lord commanded the blessing — life forevermore.',
    ],
  },
  {
    id: 'psalm-140',
    title: 'Psalm 140 (141)',
    subtitle: 'An Evening Prayer',
    content: [
      'Lord, I cry out to You; make haste to me! Give ear to my voice when I cry out to You.',
      'Let my prayer be set before You as incense, the lifting up of my hands as the evening sacrifice.',
      'Set a guard, O Lord, over my mouth; keep watch over the door of my lips.',
      'Do not incline my heart to any evil thing, to practice wicked works with men who work iniquity.',
    ],
  },
];

const gospelReading: Prayer = {
  id: 'twelfth-gospel',
  title: 'The Holy Gospel',
  subtitle: 'Luke 2:29-32, John 17:1-8',
  rubric: 'A reading from the Holy Gospel.',
  content: [
    'Lord, now You are letting Your servant depart in peace, according to Your word;',
    'For my eyes have seen Your salvation which You have prepared before the face of all peoples,',
    'A light to bring revelation to the Gentiles, and the glory of Your people Israel.',
    'Jesus spoke these words, lifted up His eyes to heaven, and said: "Father, the hour has come. Glorify Your Son, that Your Son also may glorify You."',
    '"As You have given Him authority over all flesh, that He should give eternal life to as many as You have given Him."',
    '"And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent."',
  ],
};

const litanies: Prayer = {
  id: 'twelfth-litanies',
  title: 'Litanies of the Twelfth Hour',
  content: [
    'O Lord, who stretched out Your hands upon the Cross, grant that we may lie down in peace and arise to serve You with thanksgiving.',
    'Guard us, O Lord, under the shadow of Your wings. Keep us from all evil and from every work of wickedness. Grant us a peaceful night and a sinless rest.',
    'Into Your hands, O Lord, we commend our spirits, our bodies, and our souls. Bless us, sanctify us, and grant us the life eternal. Amen.',
  ],
};

const absolution: Prayer = {
  id: 'twelfth-absolution',
  title: 'Absolution of the Twelfth Hour',
  content: [
    'O Lord God, who has given us rest from the labors of this day, and has brought us to the hours of the night:',
    'Grant us a peaceful sleep, free from all evil dreams and fantasies of darkness. Awaken us at the hour of prayer, strengthened in Your commandments.',
    'And grant that the remembrance of Your judgments may abide within us through the night. Remove from us every imagination that is unseemly and every harmful desire.',
    'For Yours is the kingdom, and the power, and the glory, forever. Amen.',
  ],
};

export const twelfthHour: AgpeyaHour = {
  id: 'twelfth',
  name: 'Twelfth Hour (Compline)',
  arabicName: 'صلاة النوم',
  hourNumber: 12,
  description: 'Prayer before sleep, commemorating the Burial of Christ. We commend our souls to God as we rest.',
  canonicalTime: '9:00 PM',
  canonicalHour: 21,
  sections: [
    { id: 'twelfth-psalms', title: 'Psalms of the Twelfth Hour', prayers: psalms },
    { id: 'twelfth-gospel', title: 'Gospel Reading', prayers: [gospelReading] },
    { id: 'twelfth-litanies', title: 'Litanies', prayers: [litanies] },
    { id: 'twelfth-absolution', title: 'Absolution', prayers: [absolution] },
  ],
};
