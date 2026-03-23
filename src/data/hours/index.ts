// Canonical Hours of the Coptic Orthodox Agpeya (Book of Hours)
// Seven hours of prayer observed daily

export { firstHour } from './first';
export { thirdHour } from './third';
export { sixthHour } from './sixth';
export { ninthHour } from './ninth';
export { eleventhHour } from './eleventh';
export { twelfthHour } from './twelfth';
export { midnightHour } from './midnight';

import { firstHour } from './first';
import { thirdHour } from './third';
import { sixthHour } from './sixth';
import { ninthHour } from './ninth';
import { eleventhHour } from './eleventh';
import { twelfthHour } from './twelfth';
import { midnightHour } from './midnight';
import { AgpeyaHour } from '../../types';

// All hours in canonical order
export const allHours: AgpeyaHour[] = [
  firstHour,
  thirdHour,
  sixthHour,
  ninthHour,
  eleventhHour,
  twelfthHour,
  midnightHour,
];

// Get the appropriate hour based on current time of day
export function getCurrentHour(): AgpeyaHour {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 0 && hour < 6) return midnightHour;
  if (hour >= 6 && hour < 9) return firstHour;
  if (hour >= 9 && hour < 12) return thirdHour;
  if (hour >= 12 && hour < 15) return sixthHour;
  if (hour >= 15 && hour < 17) return ninthHour;
  if (hour >= 17 && hour < 21) return eleventhHour;
  return twelfthHour; // 21:00 - 23:59
}

// Get hour by ID
export function getHourById(id: string): AgpeyaHour | undefined {
  return allHours.find(h => h.id === id);
}
