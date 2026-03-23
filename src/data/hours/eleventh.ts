// Eleventh Hour (Vespers) - Sunset
// Theme: Taking down the Body of Christ from the Cross

import { AgpeyaHour, Prayer } from '../../types';

const psalms: Prayer[] = [
  {
    id: 'psalm-116',
    title: 'Psalm 116 (117)',
    subtitle: 'Universal Praise',
    content: [
      'Praise the Lord, all you nations! Laud Him, all you peoples!',
      'For His merciful kindness is great toward us, and the truth of the Lord endures forever. Alleluia.',
    ],
  },
  {
    id: 'psalm-117',
    title: 'Psalm 117 (118)',
    subtitle: 'The Lord Is My Strength',
    content: [
      'Oh, give thanks to the Lord, for He is good! For His mercy endures forever.',
      'Let Israel now say, His mercy endures forever.',
      'The Lord is my strength and song, and He has become my salvation.',
      'The voice of rejoicing and salvation is in the tents of the righteous; the right hand of the Lord does valiantly.',
      'I shall not die, but live, and declare the works of the Lord.',
      'The stone which the builders rejected has become the chief cornerstone.',
      'This was the Lord\'s doing; it is marvelous in our eyes.',
      'This is the day the Lord has made; we will rejoice and be glad in it.',
    ],
  },
  {
    id: 'psalm-120',
    title: 'Psalm 120 (121)',
    subtitle: 'The Lord Is Your Keeper',
    content: [
      'I will lift up my eyes to the hills. From whence comes my help?',
      'My help comes from the Lord, who made heaven and earth.',
      'He will not allow your foot to be moved; He who keeps you will not slumber.',
      'Behold, He who keeps Israel shall neither slumber nor sleep.',
      'The Lord is your keeper; the Lord is your shade at your right hand.',
      'The sun shall not strike you by day, nor the moon by night.',
      'The Lord shall preserve you from all evil; He shall preserve your soul.',
      'The Lord shall preserve your going out and your coming in from this time forth, and even forevermore.',
    ],
  },
];

const gospelReading: Prayer = {
  id: 'eleventh-gospel',
  title: 'The Holy Gospel',
  subtitle: 'John 19:38-42',
  rubric: 'A reading from the Holy Gospel according to St. John.',
  content: [
    'After this, Joseph of Arimathea, being a disciple of Jesus, but secretly, for fear of the Jews, asked Pilate that he might take away the body of Jesus; and Pilate gave him permission. So he came and took the body of Jesus.',
    'And Nicodemus, who at first came to Jesus by night, also came, bringing a mixture of myrrh and aloes, about a hundred pounds.',
    'Then they took the body of Jesus, and bound it in strips of linen with the spices, as the custom of the Jews is to bury.',
    'Now in the place where He was crucified there was a garden, and in the garden a new tomb in which no one had yet been laid. So there they laid Jesus.',
  ],
};

const litanies: Prayer = {
  id: 'eleventh-litanies',
  title: 'Litanies of the Eleventh Hour',
  content: [
    'O You who at the eleventh hour of the day were taken down from the Cross by the hands of Joseph and Nicodemus: We praise You and glorify You, O Christ our God.',
    'You carried our sins in Your body upon the wood, that we, being dead to sins, should live for righteousness. By Your wounds we are healed.',
    'Remember us, O Lord, when You come into Your kingdom.',
  ],
};

const absolution: Prayer = {
  id: 'eleventh-absolution',
  title: 'Absolution of the Eleventh Hour',
  content: [
    'O Lord Jesus Christ, who at the setting of the sun were laid in a new tomb, and brought down the dominion of death:',
    'Grant us to die to sin and to live to righteousness; and when we depart from this life, count us worthy of eternal blessedness in Your heavenly kingdom.',
    'For You are our God, and to You we ascribe glory, with Your Good Father and the Holy Spirit, now and forever. Amen.',
  ],
};

export const eleventhHour: AgpeyaHour = {
  id: 'eleventh',
  name: 'Eleventh Hour (Vespers)',
  arabicName: 'صلاة الغروب',
  hourNumber: 11,
  description: 'Sunset prayer commemorating the taking down of the Body of Christ from the Cross.',
  canonicalTime: '5:00 PM',
  canonicalHour: 17,
  sections: [
    { id: 'eleventh-psalms', title: 'Psalms of the Eleventh Hour', prayers: psalms },
    { id: 'eleventh-gospel', title: 'Gospel Reading', prayers: [gospelReading] },
    { id: 'eleventh-litanies', title: 'Litanies', prayers: [litanies] },
    { id: 'eleventh-absolution', title: 'Absolution', prayers: [absolution] },
  ],
};
