// Common prayers from the Coptic Orthodox Agpeya (Book of Hours)
// These prayers are shared across multiple canonical hours.

import { Prayer } from '../types';

export const introductoryPrayer: Prayer = {
  id: 'intro',
  title: 'Introductory Prayer',
  rubric: 'In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.',
  content: [
    'O Heavenly King, the Comforter, the Spirit of Truth, who art everywhere present and fillest all things, the Treasury of good things, and Giver of life: Come and dwell in us, and purify us from every stain, and save our souls, O Good One.',
  ],
};

export const thanksgivingPrayer: Prayer = {
  id: 'thanksgiving',
  title: 'Thanksgiving Prayer',
  content: [
    'Let us give thanks to the beneficent and merciful God, the Father of our Lord, God and Savior, Jesus Christ, for He has covered us, helped us, guarded us, accepted us unto Him, had compassion on us, supported us, and brought us to this hour.',
    'Let us also ask Him, the Lord our God, the Almighty, to guard us in all peace this holy day and all the days of our life.',
    'O Master, Lord, God the Almighty, the Father of our Lord, God and Savior, Jesus Christ, we thank You for every condition, concerning every condition, and in every condition, for You have covered us, helped us, guarded us, accepted us unto You, had compassion on us, supported us, and brought us to this hour.',
    'We pray and entreat Your goodness, O Lover of mankind, grant us to complete this holy day and all the days of our life in all peace with Your fear.',
    'All envy, all temptation, all the work of Satan, the counsel of wicked men, and the rising up of enemies, hidden and manifest, take them away from us, and from all Your people, and from this holy place that is Yours.',
    'But those things which are good and profitable do provide for us; for it is You who have given us the authority to tread on serpents and scorpions, and upon all the power of the enemy.',
    'And lead us not into temptation, but deliver us from evil, by the grace, compassion, and love of mankind, of Your Only-Begotten Son, our Lord, God and Savior, Jesus Christ, through whom the glory, the honor, and the dominion are due unto You, with Him, and the Holy Spirit, the Life-Giver, who is of one essence with You, now and at all times, and unto the ages of all ages. Amen.',
  ],
};

export const psalm50: Prayer = {
  id: 'psalm50',
  title: 'Psalm 50 (51)',
  subtitle: 'The Psalm of Repentance',
  rubric: 'A Psalm of David, when Nathan the prophet came to him after he had sinned.',
  content: [
    'Have mercy upon me, O God, according to Your great mercy; and according to the abundance of Your compassion, blot out my transgression.',
    'Wash me thoroughly from my iniquity, and cleanse me from my sin.',
    'For I know my iniquity, and my sin is ever before me.',
    'Against You only have I sinned, and done evil before You, that You may be justified in Your words, and overcome when You are judged.',
    'For behold, I was conceived in iniquities, and in sins my mother bore me.',
    'For behold, You have loved truth; the unclear and hidden things of Your wisdom You have made clear to me.',
    'Sprinkle me with hyssop, and I shall be clean; wash me, and I shall be whiter than snow.',
    'Make me to hear joy and gladness; the humbled bones shall rejoice.',
    'Turn Your face away from my sins, and blot out all my iniquities.',
    'Create in me a clean heart, O God, and renew a right spirit within me.',
    'Cast me not away from Your presence, and take not Your Holy Spirit from me.',
    'Restore to me the joy of Your salvation, and establish me with Your governing Spirit.',
    'I shall teach the transgressors Your ways, and the ungodly shall turn back to You.',
    'Deliver me from bloodguiltiness, O God, the God of my salvation, and my tongue shall rejoice in Your righteousness.',
    'O Lord, open my lips, and my mouth shall declare Your praise.',
    'For if You had desired sacrifice, I would have given it; You will not be pleased with burnt offerings.',
    'A sacrifice to God is a broken spirit; a broken and humbled heart God will not despise.',
    'Do good, O Lord, in Your good pleasure to Zion, and let the walls of Jerusalem be built.',
    'Then You shall be pleased with a sacrifice of righteousness, offering and whole burnt offerings. Then they shall offer bulls on Your altar.',
  ],
};

export const lordsPrayer: Prayer = {
  id: 'lords-prayer',
  title: "The Lord's Prayer",
  content: [
    'Our Father, who art in heaven, hallowed be Thy name. Thy kingdom come. Thy will be done, on earth as it is in heaven.',
    'Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil.',
    'In Christ Jesus, our Lord. For Thine is the kingdom, the power, and the glory, forever. Amen.',
  ],
};

export const trisagion: Prayer = {
  id: 'trisagion',
  title: 'The Trisagion (Agios)',
  rubric: 'Say three times:',
  content: [
    'Holy God, Holy Mighty, Holy Immortal, who was born of the Virgin, have mercy on us.',
    'Holy God, Holy Mighty, Holy Immortal, who was crucified for us, have mercy on us.',
    'Holy God, Holy Mighty, Holy Immortal, who rose from the dead and ascended into the heavens, have mercy on us.',
    'Glory be to the Father, and to the Son, and to the Holy Spirit, now and forever and unto the ages of all ages. Amen.',
    'O Holy Trinity, have mercy on us. O Holy Trinity, have mercy on us. O Holy Trinity, have mercy on us.',
    'Lord forgive us our sins. Lord forgive us our iniquities. Lord forgive us our trespasses.',
    'Lord visit the sick of Your people. Heal them for the sake of Your holy name. Our fathers and brothers who have fallen asleep, O Lord, repose their souls.',
    'Hail to you, O Mary, the Mother of God, the faithful Virgin.',
    'Hail to the angel Gabriel, the announcer of the Mother of God.',
  ],
};

export const niceneCreed: Prayer = {
  id: 'creed',
  title: 'The Orthodox Creed',
  content: [
    'We believe in one God, God the Father, the Almighty, Maker of heaven and earth, and of all things visible and invisible.',
    'We believe in one Lord Jesus Christ, the Only-Begotten Son of God, begotten of the Father before all ages. Light of Light, true God of true God, begotten not created, of one essence with the Father, by whom all things were made.',
    'Who for us men and for our salvation came down from heaven, and was incarnate of the Holy Spirit and of the Virgin Mary, and became man.',
    'And He was crucified for us under Pontius Pilate, suffered and was buried.',
    'And on the third day He rose from the dead, according to the Scriptures, ascended into the heavens, and sits at the right hand of His Father.',
    'And He shall come again in His glory to judge the living and the dead, whose kingdom shall have no end.',
    'Yes, we believe in the Holy Spirit, the Lord, the Life-Giver, who proceeds from the Father, who with the Father and the Son is worshipped and glorified, who spoke by the prophets.',
    'And in one holy, catholic, and apostolic Church. We confess one baptism for the remission of sins.',
    'We look for the resurrection of the dead, and the life of the age to come. Amen.',
  ],
};

export const hailMary: Prayer = {
  id: 'hail-mary',
  title: 'Hail to You, O Mary',
  content: [
    'Hail to you, O Mary, the fair dove, who has borne for us God the Logos.',
    'Hail to you, O Virgin, the very and true Queen. Hail to the pride of our race, who has borne for us Emmanuel.',
    'We ask you to remember us, O our faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins.',
  ],
};

export const lordHaveMercy: Prayer = {
  id: 'lord-have-mercy-41',
  title: 'Lord Have Mercy',
  rubric: 'Repeat 41 times:',
  content: [
    'Lord have mercy. Lord have mercy. Lord have mercy.',
  ],
};

export const holyHolyHoly: Prayer = {
  id: 'holy-holy-holy',
  title: 'Holy, Holy, Holy',
  content: [
    'Holy, holy, holy, Lord of hosts; heaven and earth are full of Your holy glory.',
  ],
};

export const concludingPrayer: Prayer = {
  id: 'concluding',
  title: 'Concluding Prayer',
  content: [
    'Have mercy on us, O God, and have mercy on us, who, at all times and in every hour, in heaven and on earth, is worshipped and glorified, Christ our God, the good, the long suffering, the abundant in mercy, and the great in compassion, who loves the righteous and has mercy on the sinners, of whom I am chief.',
    'Who does not desire the death of the sinner but rather that he returns and lives. Who calls all to salvation through the promise of the blessings to come.',
    'Lord, receive from us our prayers in this hour and in every hour. Ease our life and guide us to fulfill Your commandments. Sanctify our spirits. Cleanse our bodies. Straighten our thoughts. Purify our intentions. Heal our diseases. Forgive our sins.',
    'Deliver us from every evil grief and distress of heart. Surround us by Your holy angels, that, guided and guarded in their camp, we may attain the unity of faith, and the knowledge of Your unapproachable and infinite glory.',
    'For You are blessed forever. Amen.',
  ],
};

// The common opening sequence used in every hour
export const commonOpening: Prayer[] = [
  introductoryPrayer,
  thanksgivingPrayer,
  psalm50,
];

// The common closing sequence used in every hour
export const commonClosing: Prayer[] = [
  trisagion,
  lordsPrayer,
  hailMary,
  niceneCreed,
  lordHaveMercy,
  holyHolyHoly,
  concludingPrayer,
];
