import { PrayerSet } from '../types';

export const prayerSets: PrayerSet[] = [
  {
    id: 'jesus-prayer',
    name: 'The Jesus Prayer',
    prayer: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.',
    defaultKnotCount: 100,
    description: 'The ancient prayer of the heart, central to Orthodox spiritual practice.',
  },
  {
    id: 'kyrie-eleison',
    name: 'Kyrie Eleison',
    prayer: 'Lord, have mercy.',
    defaultKnotCount: 100,
    description: 'The fundamental cry for God\'s mercy, used throughout Orthodox liturgy.',
  },
  {
    id: 'agios',
    name: 'Agios (Trisagion)',
    prayer: 'Holy God, Holy Mighty, Holy Immortal, who was born of the Virgin, have mercy on us.\nHoly God, Holy Mighty, Holy Immortal, who was crucified for us, have mercy on us.\nHoly God, Holy Mighty, Holy Immortal, who rose from the dead and ascended into the heavens, have mercy on us.',
    defaultKnotCount: 33,
    description: 'The Trisagion — the thrice-holy hymn praising the Trinity.',
  },
  {
    id: 'lords-prayer',
    name: 'The Lord\'s Prayer',
    prayer: 'Our Father, who art in heaven, hallowed be Thy name. Thy kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. In Christ Jesus, our Lord. For Thine is the kingdom, the power, and the glory, forever. Amen.',
    defaultKnotCount: 33,
    description: 'The prayer taught by our Lord Jesus Christ.',
  },
  {
    id: 'theotokos',
    name: 'Hail Mary (Theotokia)',
    prayer: 'Hail to you, O Mary, the fair dove, who has borne for us God the Logos. Hail to you, O Virgin, the very and true Queen. Hail to the pride of our race, who has borne for us Emmanuel. We ask you to remember us, O our faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins.',
    defaultKnotCount: 50,
    description: 'Coptic hymn honoring the Theotokos, the Mother of God.',
  },
  {
    id: 'psalm51',
    name: 'Have Mercy (Psalm 51)',
    prayer: 'Have mercy upon me, O God, according to Your lovingkindness; according to the multitude of Your tender mercies, blot out my transgressions.',
    defaultKnotCount: 50,
    description: 'The Psalm of Repentance — King David\'s cry for forgiveness.',
  },
];
