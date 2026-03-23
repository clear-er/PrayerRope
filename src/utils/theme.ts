export const colors = {
  // Primary palette - Coptic inspired
  gold: '#D4AF37',
  goldLight: '#E8D48B',
  goldDark: '#B8960C',

  // Deep reds
  red: '#8B0000',
  redLight: '#A52A2A',
  redDark: '#5C0000',

  // Backgrounds
  bgPrimary: '#1A1A2E',
  bgSecondary: '#16213E',
  bgCard: '#1F2940',
  bgElevated: '#253352',

  // Text
  textPrimary: '#F0E6D3',
  textSecondary: '#B8A88A',
  textMuted: '#7A6F5F',
  textOnGold: '#1A1A2E',

  // Accents
  white: '#FFFFFF',
  black: '#000000',
  success: '#4CAF50',
  warning: '#FF9800',

  // Prayer rope knot colors
  knotDefault: '#8B7355',
  knotCompleted: '#D4AF37',
  knotCurrent: '#E8D48B',

  // Calendar heatmap
  heatmap0: '#1F2940',
  heatmap1: '#3D3520',
  heatmap2: '#5C4D1A',
  heatmap3: '#8B7315',
  heatmap4: '#D4AF37',
};

export const fonts = {
  sizes: {
    xs: 11,
    sm: 13,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    hero: 48,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};
