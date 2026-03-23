// Third Hour (Terce) - 9:00 AM
// Theme: Descent of the Holy Spirit at Pentecost

import { AgpeyaHour, Prayer } from '../../types';

const psalms: Prayer[] = [
  {
    id: 'psalm-19',
    title: 'Psalm 19',
    subtitle: 'The Lord Answer You',
    content: ['May the Lord answer you in the day of trouble; may the name of the God of Jacob defend you.'],
  },
  {
    id: 'psalm-22',
    title: 'Psalm 22 (23)',
    subtitle: 'The Lord Is My Shepherd',
    content: [
      'The Lord is my Shepherd; I shall not want.',
      'He makes me to lie down in green pastures; He leads me beside the still waters. He restores my soul.',
      'He leads me in the paths of righteousness for His name\'s sake.',
      'Even though I walk through the valley of the shadow of death, I will fear no evil; for You are with me; Your rod and Your staff, they comfort me.',
      'You prepare a table before me in the presence of my enemies; You anoint my head with oil; my cup runs over.',
      'Surely goodness and mercy shall follow me all the days of my life; and I will dwell in the house of the Lord forever.',
    ],
  },
  {
    id: 'psalm-33',
    title: 'Psalm 33 (34)',
    subtitle: 'Taste and See',
    content: [
      'I will bless the Lord at all times; His praise shall continually be in my mouth.',
      'My soul shall make its boast in the Lord; the humble shall hear of it and be glad.',
      'Oh, magnify the Lord with me, and let us exalt His name together.',
      'I sought the Lord, and He heard me, and delivered me from all my fears.',
      'They looked to Him and were radiant, and their faces were not ashamed.',
      'Oh, taste and see that the Lord is good; blessed is the man who trusts in Him.',
    ],
  },
];

const gospelReading: Prayer = {
  id: 'third-gospel',
  title: 'The Holy Gospel',
  subtitle: 'John 14:26-31, 15:1-4, 16:7-15',
  rubric: 'A reading from the Holy Gospel according to St. John.',
  content: [
    'But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all things that I said to you.',
    'Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.',
    'I am the true vine, and My Father is the vinedresser. Every branch in Me that does not bear fruit He takes away; and every branch that bears fruit He prunes, that it may bear more fruit.',
    'Abide in Me, and I in you. As the branch cannot bear fruit of itself, unless it abides in the vine, neither can you, unless you abide in Me.',
    'It is to your advantage that I go away; for if I do not go away, the Helper will not come to you; but if I depart, I will send Him to you.',
    'However, when He, the Spirit of truth, has come, He will guide you into all truth.',
  ],
};

const litanies: Prayer = {
  id: 'third-litanies',
  title: 'Litanies of the Third Hour',
  content: [
    'O Heavenly King, the Comforter, the Spirit of Truth, who art everywhere present and fillest all things, the Treasury of good things and Giver of life, come and dwell in us, and purify us from every stain, and save our souls, O Good One.',
    'As You sent Your Holy Spirit upon Your disciples and apostles at the third hour, take Him not from us, O Good One, but renew Him within us.',
    'A clean heart create in me, O God, and a right spirit renew within me. Cast me not away from Your presence, and take not Your Holy Spirit from me.',
  ],
};

const absolution: Prayer = {
  id: 'third-absolution',
  title: 'Absolution of the Third Hour',
  content: [
    'O God, who at the third hour sent down Your All-Holy Spirit upon Your apostles, take Him not from us, O Good One, but renew Him within us, who pray to You.',
    'Create in us a clean heart, O God, and renew a right spirit within us, and make us worthy to call upon You as Father with boldness and without condemnation, and to say: Our Father who art in heaven. Amen.',
  ],
};

export const thirdHour: AgpeyaHour = {
  id: 'third',
  name: 'Third Hour (Terce)',
  arabicName: 'صلاة الساعة الثالثة',
  hourNumber: 3,
  description: 'Commemorates the descent of the Holy Spirit upon the apostles at Pentecost.',
  canonicalTime: '9:00 AM',
  canonicalHour: 9,
  sections: [
    { id: 'third-psalms', title: 'Psalms of the Third Hour', prayers: psalms },
    { id: 'third-gospel', title: 'Gospel Reading', prayers: [gospelReading] },
    { id: 'third-litanies', title: 'Litanies', prayers: [litanies] },
    { id: 'third-absolution', title: 'Absolution', prayers: [absolution] },
  ],
};
