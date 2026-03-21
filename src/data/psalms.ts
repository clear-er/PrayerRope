// Psalm references for each canonical hour of the Agpeya
// Full texts are kept in individual hour files to stay modular

import { Prayer } from '../types';

// Helper to create a psalm prayer object
export function makePsalm(num: number, title: string, verses: string[]): Prayer {
  return {
    id: `psalm-${num}`,
    title: `Psalm ${num}`,
    subtitle: title,
    content: verses,
  };
}

// Psalm numbers assigned to each hour in the Coptic Agpeya
export const hourPsalmMap: Record<string, number[]> = {
  first:    [1, 2, 3, 4, 5, 6, 8, 11, 12, 15, 18, 24, 26, 28],
  third:    [19, 22, 23, 25, 28, 29, 33, 34, 40, 42, 44, 45],
  sixth:    [53, 56, 60, 62, 66, 69, 70, 72, 76, 82, 84, 85, 86],
  ninth:    [95, 96, 97, 98, 108, 109, 110, 111, 112, 113, 114, 115],
  eleventh: [116, 117, 118, 120, 121, 122, 123, 124, 125],
  twelfth:  [128, 129, 130, 131, 132, 134, 135, 136, 137, 140, 141],
  midnight: [3, 6, 12, 69, 85, 90, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134],
};
