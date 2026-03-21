// Ninth Hour (None) - 3:00 PM
// Theme: The Death of Christ on the Cross

import { AgpeyaHour, Prayer } from '../../types';

const psalms: Prayer[] = [
  {
    id: 'psalm-95',
    title: 'Psalm 95 (96)',
    subtitle: 'Sing to the Lord a New Song',
    content: [
      'Oh, sing to the Lord a new song! Sing to the Lord, all the earth.',
      'Sing to the Lord, bless His name; proclaim the good news of His salvation from day to day.',
      'Declare His glory among the nations, His wonders among all peoples.',
      'For the Lord is great and greatly to be praised; He is to be feared above all gods.',
      'For all the gods of the peoples are idols, but the Lord made the heavens.',
      'Honor and majesty are before Him; strength and beauty are in His sanctuary.',
    ],
  },
  {
    id: 'psalm-96',
    title: 'Psalm 96 (97)',
    subtitle: 'The Lord Reigns',
    content: [
      'The Lord reigns; let the earth rejoice; let the multitude of isles be glad!',
      'Clouds and darkness surround Him; righteousness and justice are the foundation of His throne.',
      'The heavens declare His righteousness, and all the peoples see His glory.',
      'Zion hears and is glad, and the daughters of Judah rejoice because of Your judgments, O Lord.',
    ],
  },
  {
    id: 'psalm-110',
    title: 'Psalm 110 (111)',
    subtitle: 'Great Are the Works of the Lord',
    content: [
      'Praise the Lord! I will praise the Lord with my whole heart, in the assembly of the upright and in the congregation.',
      'The works of the Lord are great, studied by all who have pleasure in them.',
      'His work is honorable and glorious, and His righteousness endures forever.',
      'He has made His wonderful works to be remembered; the Lord is gracious and full of compassion.',
    ],
  },
];

const gospelReading: Prayer = {
  id: 'ninth-gospel',
  title: 'The Holy Gospel',
  subtitle: 'Matthew 27:46-56',
  rubric: 'A reading from the Holy Gospel according to St. Matthew.',
  content: [
    'And about the ninth hour Jesus cried out with a loud voice, saying, "Eli, Eli, lama sabachthani?" that is, "My God, My God, why have You forsaken Me?"',
    'Jesus, when He had cried out again with a loud voice, yielded up His spirit.',
    'Then, behold, the veil of the temple was torn in two from top to bottom; and the earth quaked, and the rocks were split, and the graves were opened.',
    'So when the centurion and those with him, who were guarding Jesus, saw the earthquake and the things that had happened, they feared greatly, saying, "Truly this was the Son of God!"',
  ],
};

const litanies: Prayer = {
  id: 'ninth-litanies',
  title: 'Litanies of the Ninth Hour',
  content: [
    'O You who at the ninth hour tasted death in the flesh for our sake: Mortify our carnal lusts, O Christ our God, and save us.',
    'When the thief beheld the Author of life hanging upon the Cross, he said: If He who is crucified with us were not God incarnate, the sun would not have hidden its rays, nor would the earth have quaked trembling. But O You who endure all things, remember me, O Lord, in Your kingdom.',
  ],
};

const absolution: Prayer = {
  id: 'ninth-absolution',
  title: 'Absolution of the Ninth Hour',
  content: [
    'O Master, Lord Jesus Christ our God, who bowed Your head upon the Cross at the ninth hour, and poured out Your precious blood for the remission of our sins:',
    'We beseech You, O Good One, forgive us our sins, those we have committed knowingly and unknowingly. Shelter us under the shadow of Your wings, and have mercy upon us and upon Your world, for You are good and the Lover of mankind.',
    'For to You is due all glory, honor, and dominion, with Your Good Father and the Holy Spirit, now and forever. Amen.',
  ],
};

export const ninthHour: AgpeyaHour = {
  id: 'ninth',
  name: 'Ninth Hour (None)',
  arabicName: 'صلاة الساعة التاسعة',
  hourNumber: 9,
  description: 'Afternoon prayer commemorating the death of our Lord on the Cross.',
  canonicalTime: '3:00 PM',
  canonicalHour: 15,
  sections: [
    { id: 'ninth-psalms', title: 'Psalms of the Ninth Hour', prayers: psalms },
    { id: 'ninth-gospel', title: 'Gospel Reading', prayers: [gospelReading] },
    { id: 'ninth-litanies', title: 'Litanies', prayers: [litanies] },
    { id: 'ninth-absolution', title: 'Absolution', prayers: [absolution] },
  ],
};
