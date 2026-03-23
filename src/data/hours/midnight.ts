// Midnight Hour - 12:00 AM
// Theme: The Second Coming of Christ, vigilance
// Divided into three watches in the Coptic tradition

import { AgpeyaHour, Prayer } from '../../types';

const firstWatchPsalms: Prayer[] = [
  {
    id: 'psalm-3-midnight',
    title: 'Psalm 3',
    subtitle: 'A Morning Prayer of Trust',
    content: [
      'O Lord, why are those who afflict me multiplied? Many rise up against me.',
      'Many say to my soul: There is no salvation for him in his God.',
      'But You, O Lord, are my helper, my glory, and the One who lifts up my head.',
      'I cried to the Lord with my voice, and He heard me from His holy mountain.',
      'I lay down and slept; I awoke, for the Lord will sustain me.',
      'I will not be afraid of ten thousands of people who set themselves against me round about.',
      'Rise, O Lord; save me, O my God.',
      'Salvation belongs to the Lord, and Your blessing is upon Your people.',
    ],
  },
];

const secondWatchPsalms: Prayer[] = [
  {
    id: 'psalm-119-midnight',
    title: 'Psalm 119 (120)',
    subtitle: 'A Cry for Deliverance',
    content: [
      'In my distress I cried to the Lord, and He heard me.',
      'Deliver my soul, O Lord, from lying lips and from a deceitful tongue.',
      'Woe is me, that I dwell in Meshech, that I dwell among the tents of Kedar!',
      'My soul has dwelt too long with one who hates peace.',
      'I am for peace; but when I speak, they are for war.',
    ],
  },
  {
    id: 'psalm-120-midnight',
    title: 'Psalm 120 (121)',
    subtitle: 'The Lord Is Your Keeper',
    content: [
      'I will lift up my eyes to the hills. From whence comes my help?',
      'My help comes from the Lord, who made heaven and earth.',
      'He will not allow your foot to be moved; He who keeps you will not slumber.',
      'Behold, He who keeps Israel shall neither slumber nor sleep.',
    ],
  },
];

const thirdWatchPsalms: Prayer[] = [
  {
    id: 'psalm-133-midnight',
    title: 'Psalm 133 (134)',
    subtitle: 'Night Watch Blessing',
    content: [
      'Behold, bless the Lord, all you servants of the Lord, who by night stand in the house of the Lord!',
      'Lift up your hands in the sanctuary, and bless the Lord.',
      'The Lord who made heaven and earth bless you from Zion!',
    ],
  },
  {
    id: 'psalm-134-midnight',
    title: 'Psalm 134 (135)',
    subtitle: 'Praise the Lord',
    content: [
      'Praise the Lord! Praise the name of the Lord; praise Him, O you servants of the Lord!',
      'You who stand in the house of the Lord, in the courts of the house of our God.',
      'Praise the Lord, for the Lord is good; sing praises to His name, for it is pleasant.',
      'Whatever the Lord pleases He does, in heaven and in earth, in the seas and in all deep places.',
    ],
  },
];

const gospelReading: Prayer = {
  id: 'midnight-gospel',
  title: 'The Holy Gospel',
  subtitle: 'Matthew 25:1-13',
  rubric: 'A reading from the Holy Gospel according to St. Matthew.',
  content: [
    'Then the kingdom of heaven shall be likened to ten virgins who took their lamps and went out to meet the bridegroom.',
    'Now five of them were wise, and five were foolish.',
    'Those who were foolish took their lamps and took no oil with them, but the wise took oil in their vessels with their lamps.',
    'But while the bridegroom was delayed, they all slumbered and slept.',
    'And at midnight a cry was heard: Behold, the bridegroom is coming; go out to meet him!',
    'Then all those virgins arose and trimmed their lamps.',
    'And the foolish said to the wise, Give us some of your oil, for our lamps are going out.',
    'But the wise answered, saying, No, lest there should not be enough for us and you; but go rather to those who sell, and buy for yourselves.',
    'Watch therefore, for you know neither the day nor the hour in which the Son of Man is coming.',
  ],
};

const litanies: Prayer = {
  id: 'midnight-litanies',
  title: 'Litanies of the Midnight Hour',
  content: [
    'Behold, the Bridegroom comes at midnight, and blessed is the servant whom He shall find watching; but unworthy is he whom He shall find heedless.',
    'Beware therefore, O my soul, lest you be weighed down with sleep, lest you be given up to death and be shut out of the kingdom.',
    'But rouse yourself, crying: Holy, holy, holy are You, O our God. Through the Theotokos, have mercy on us.',
  ],
};

const absolution: Prayer = {
  id: 'midnight-absolution',
  title: 'Absolution of the Midnight Hour',
  content: [
    'O You who at every time and at every hour are worshipped and glorified in heaven and on earth, O Christ our God, long-suffering, plenteous in mercy, and most compassionate:',
    'Who loves the righteous and has mercy on the sinners, who calls all to salvation through the promise of good things to come:',
    'O Lord, receive our prayers at this hour, and direct our lives to Your commandments. Sanctify our souls, cleanse our bodies, correct our thoughts, purify our minds.',
    'Deliver us from every affliction, evil, and distress. Surround us with Your holy angels, that guided and guarded by their array, we may attain the unity of the faith and the knowledge of Your unapproachable and infinite glory.',
    'For You are blessed unto the ages of ages. Amen.',
  ],
};

export const midnightHour: AgpeyaHour = {
  id: 'midnight',
  name: 'Midnight Hour',
  arabicName: 'صلاة نصف الليل',
  hourNumber: 0,
  description: 'Prayer of the night watches, anticipating the Second Coming. "At midnight a cry was heard: Behold, the Bridegroom comes."',
  canonicalTime: '12:00 AM',
  canonicalHour: 0,
  sections: [
    { id: 'midnight-watch1', title: 'First Watch', prayers: firstWatchPsalms },
    { id: 'midnight-watch2', title: 'Second Watch', prayers: secondWatchPsalms },
    { id: 'midnight-watch3', title: 'Third Watch', prayers: thirdWatchPsalms },
    { id: 'midnight-gospel', title: 'Gospel Reading', prayers: [gospelReading] },
    { id: 'midnight-litanies', title: 'Litanies', prayers: [litanies] },
    { id: 'midnight-absolution', title: 'Absolution', prayers: [absolution] },
  ],
};
