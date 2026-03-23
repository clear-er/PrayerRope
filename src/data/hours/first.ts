// First Hour (Prime) - Morning Prayer, 6:00 AM
// Theme: Thanksgiving for the new day, asking God's blessing

import { AgpeyaHour, Prayer } from '../../types';
import { makePsalm } from '../psalms';

const psalm1 = makePsalm(1, 'The Way of the Righteous', [
  'Blessed is the man who has not walked in the counsel of the ungodly, nor stood in the way of sinners, nor sat in the seat of the pestilent.',
  'But his will is in the law of the Lord, and in His law he will meditate day and night.',
  'And he shall be as a tree planted by the streams of water, that brings forth its fruit in its season; its leaf also shall not wither, and whatever he does shall prosper.',
  'Not so the ungodly, not so; but rather as the chaff which the wind scatters from the face of the earth.',
  'Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.',
  'For the Lord knows the way of the righteous, and the way of the ungodly shall perish.',
]);

const psalm2 = makePsalm(2, 'The Reign of the Anointed', [
  'Why did the nations rage, and the peoples meditate on vain things?',
  'The kings of the earth stood up, and the rulers gathered together, against the Lord, and against His Christ.',
  'Let us break their bonds asunder, and cast away their yoke from us.',
  'He that dwells in heaven shall laugh at them, and the Lord shall deride them.',
  'Then shall He speak to them in His wrath, and in His anger He shall trouble them.',
  'But I was established as king by Him upon Zion, His holy mountain, proclaiming the decree of the Lord.',
  'The Lord said to me: You are My Son; this day I have begotten You.',
  'Ask of Me, and I will give You the nations for Your inheritance, and the ends of the earth for Your possession.',
  'You shall shepherd them with a rod of iron; You shall shatter them as a potter\'s vessel.',
  'And now, O kings, understand; be instructed, all you who judge the earth.',
  'Serve the Lord with fear, and rejoice in Him with trembling.',
  'Embrace discipline, lest the Lord be angry, and you perish from the righteous way when His wrath is kindled suddenly. Blessed are all who put their trust in Him.',
]);

const psalm3 = makePsalm(3, 'A Morning Prayer of Trust', [
  'O Lord, why are those who afflict me multiplied? Many rise up against me.',
  'Many say to my soul: There is no salvation for him in his God.',
  'But You, O Lord, are my helper, my glory, and the One who lifts up my head.',
  'I cried to the Lord with my voice, and He heard me from His holy mountain.',
  'I lay down and slept; I awoke, for the Lord will sustain me.',
  'I will not be afraid of ten thousands of people who set themselves against me round about.',
  'Rise, O Lord; save me, O my God. For You have struck all who were my enemies without cause; You have broken the teeth of sinners.',
  'Salvation belongs to the Lord, and Your blessing is upon Your people.',
]);

const psalm5 = makePsalm(5, 'A Prayer for Guidance', [
  'Give ear to my words, O Lord; attend to my cry.',
  'Hear the voice of my supplication, O my King and my God; for to You I will pray.',
  'O Lord, in the morning You shall hear my voice; in the morning I will stand before You, and You will look upon me.',
  'For You are not a God who desires iniquity; he who works evil shall not dwell near You.',
  'Neither shall the transgressors remain before Your eyes. You have hated all the workers of iniquity; You shall destroy all who speak lies.',
  'The Lord abhors the man of blood and of deceit.',
  'But as for me, in the abundance of Your mercy I will come into Your house; I will worship toward Your holy temple, in Your fear.',
  'O Lord, lead me in Your righteousness because of my enemies; make my way straight before You.',
]);

const psalm6 = makePsalm(6, 'A Prayer in Distress', [
  'O Lord, rebuke me not in Your anger, nor chasten me in Your wrath.',
  'Have mercy on me, O Lord, for I am weak; heal me, O Lord, for my bones are troubled.',
  'My soul is also greatly troubled; but You, O Lord, how long?',
  'Return, O Lord, deliver my soul. Oh, save me for Your mercy\'s sake.',
  'For in death no one remembers You; in Sheol, who will give You thanks?',
  'I am weary with my groaning; all night I flood my bed; I drench my couch with my tears.',
  'My eye wastes away because of grief; it grows old because of all my enemies.',
  'Depart from me, all you workers of iniquity; for the Lord has heard the voice of my weeping.',
  'The Lord has heard my supplication; the Lord will receive my prayer.',
  'Let all my enemies be ashamed and greatly troubled; let them be turned back and ashamed suddenly.',
]);

const gospelReading: Prayer = {
  id: 'first-gospel',
  title: 'The Holy Gospel',
  subtitle: 'John 1:1-17',
  rubric: 'A reading from the Holy Gospel according to St. John.',
  content: [
    'In the beginning was the Word, and the Word was with God, and the Word was God.',
    'He was in the beginning with God. All things were made through Him, and without Him nothing was made that was made.',
    'In Him was life, and the life was the light of men. And the light shines in the darkness, and the darkness did not comprehend it.',
    'There was a man sent from God, whose name was John. This man came for a witness, to bear witness of the Light, that all through him might believe.',
    'He was not that Light, but was sent to bear witness of that Light. That was the true Light which gives light to every man coming into the world.',
    'He was in the world, and the world was made through Him, and the world did not know Him.',
    'He came to His own, and His own did not receive Him. But as many as received Him, to them He gave the right to become children of God, to those who believe in His name.',
    'Who were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.',
    'And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the Only Begotten of the Father, full of grace and truth.',
    'For of His fullness we have all received, and grace for grace. For the law was given through Moses, but grace and truth came through Jesus Christ.',
  ],
};

const litanies: Prayer = {
  id: 'first-litanies',
  title: 'Litanies of the First Hour',
  content: [
    'O Christ, the True Light, who enlightens and sanctifies every man that comes into the world, let the light of Your countenance shine on us that in it we may see the unapproachable light.',
    'Direct our steps according to Your will, through the intercessions of the all-holy Theotokos and Ever-Virgin Mary, and of all Your saints.',
    'For You are our sanctification, and we ascribe glory unto You, the Father, and the Son, and the Holy Spirit, now and forever and unto the ages of all ages. Amen.',
  ],
};

const absolution: Prayer = {
  id: 'first-absolution',
  title: 'Absolution of the First Hour',
  content: [
    'O Lord, You who at all times and at every hour, both in heaven and on earth, are worshipped and glorified, O Christ our God, who are long-suffering, plenteous in mercy, most compassionate, who loves the righteous and has mercy upon sinners, who calls all men to salvation through the promise of good things to come:',
    'O Lord, in this hour receive our supplications, and direct our lives according to Your commandments. Sanctify our souls, purify our bodies, correct our thoughts, cleanse our minds, deliver us from all affliction, evil, and distress.',
    'Surround us with Your holy angels, that guided and guarded by their array, we may attain the unity of the faith and the knowledge of Your unapproachable and infinite glory.',
    'For You are blessed unto the ages of ages. Amen.',
  ],
};

export const firstHour: AgpeyaHour = {
  id: 'first',
  name: 'First Hour (Prime)',
  arabicName: 'صلاة باكر',
  hourNumber: 1,
  description: 'Morning prayer of thanksgiving for the new day. Recalls the Resurrection of Christ at dawn.',
  canonicalTime: '6:00 AM',
  canonicalHour: 6,
  sections: [
    {
      id: 'first-psalms',
      title: 'Psalms of the First Hour',
      prayers: [psalm1, psalm2, psalm3, psalm5, psalm6],
    },
    {
      id: 'first-gospel',
      title: 'Gospel Reading',
      prayers: [gospelReading],
    },
    {
      id: 'first-litanies',
      title: 'Litanies',
      prayers: [litanies],
    },
    {
      id: 'first-absolution',
      title: 'Absolution',
      prayers: [absolution],
    },
  ],
};
