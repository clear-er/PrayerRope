// Sixth Hour (Sext) - 12:00 PM (Noon)
// Theme: The Crucifixion of Christ

import { AgpeyaHour, Prayer } from '../../types';

const psalms: Prayer[] = [
  {
    id: 'psalm-53',
    title: 'Psalm 53 (54)',
    subtitle: 'A Prayer for Deliverance',
    content: [
      'Save me, O God, by Your name, and vindicate me by Your strength.',
      'Hear my prayer, O God; give ear to the words of my mouth.',
      'For strangers have risen up against me, and oppressors have sought after my life; they have not set God before them.',
      'Behold, God is my helper; the Lord is with those who uphold my life.',
    ],
  },
  {
    id: 'psalm-56',
    title: 'Psalm 56 (57)',
    subtitle: 'Prayer for Mercy',
    content: [
      'Be merciful to me, O God, be merciful to me! For my soul trusts in You; and in the shadow of Your wings I will make my refuge, until these calamities have passed by.',
      'I will cry out to God Most High, to God who performs all things for me.',
      'He shall send from heaven and save me; He reproaches the one who would swallow me up.',
      'My heart is steadfast, O God, my heart is steadfast; I will sing and give praise.',
    ],
  },
  {
    id: 'psalm-60',
    title: 'Psalm 60 (61)',
    subtitle: 'Confidence in God',
    content: [
      'Hear my cry, O God; attend to my prayer.',
      'From the end of the earth I will cry to You, when my heart is overwhelmed; lead me to the rock that is higher than I.',
      'For You have been a shelter for me, a strong tower from the enemy.',
      'I will abide in Your tabernacle forever; I will trust in the shelter of Your wings.',
    ],
  },
];

const gospelReading: Prayer = {
  id: 'sixth-gospel',
  title: 'The Holy Gospel',
  subtitle: 'Matthew 27:27-45',
  rubric: 'A reading from the Holy Gospel according to St. Matthew.',
  content: [
    'Now from the sixth hour until the ninth hour there was darkness over all the land.',
    'And about the ninth hour Jesus cried out with a loud voice, saying, "Eli, Eli, lama sabachthani?" that is, "My God, My God, why have You forsaken Me?"',
    'Then, behold, the veil of the temple was torn in two from top to bottom; and the earth quaked, and the rocks were split.',
  ],
};

const litanies: Prayer = {
  id: 'sixth-litanies',
  title: 'Litanies of the Sixth Hour',
  content: [
    'O You who on the sixth day and at the sixth hour were nailed upon the Cross for the sin which Adam dared to commit in Paradise: Tear asunder the handwriting of our sins, O Christ our God, and save us.',
    'When the thief saw the Author of life hanging on the Cross, he said: If it were not God incarnate who is crucified with us, the sun would not have hidden its rays nor would the earth have quaked and trembled. O Lord, who endures all things, remember me when You come into Your kingdom.',
  ],
};

const absolution: Prayer = {
  id: 'sixth-absolution',
  title: 'Absolution of the Sixth Hour',
  content: [
    'O Master, Lord Jesus Christ our God, who for our sake and for our salvation endured the suffering of the Cross, that You might set us free from the bondage of the enemy:',
    'We pray You, O our Master, to grant us forgiveness of our sins, and strengthen us by Your Holy Spirit, that we may serve You in holiness and righteousness all the days of our life.',
    'For You are our God, and to You we ascribe glory, the Father, the Son, and the Holy Spirit, now and forever. Amen.',
  ],
};

export const sixthHour: AgpeyaHour = {
  id: 'sixth',
  name: 'Sixth Hour (Sext)',
  arabicName: 'صلاة الساعة السادسة',
  hourNumber: 6,
  description: 'Noon prayer commemorating the Crucifixion of our Lord Jesus Christ.',
  canonicalTime: '12:00 PM',
  canonicalHour: 12,
  sections: [
    { id: 'sixth-psalms', title: 'Psalms of the Sixth Hour', prayers: psalms },
    { id: 'sixth-gospel', title: 'Gospel Reading', prayers: [gospelReading] },
    { id: 'sixth-litanies', title: 'Litanies', prayers: [litanies] },
    { id: 'sixth-absolution', title: 'Absolution', prayers: [absolution] },
  ],
};
