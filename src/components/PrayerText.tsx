import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, spacing } from '../utils/theme';
import type { Prayer } from '../types';

interface Props {
  prayer: Prayer;
}

export const PrayerText = React.memo(function PrayerText({ prayer }: Props) {
  return (
    <View style={styles.container}>
      {prayer.rubric && <Text style={styles.rubric}>{prayer.rubric}</Text>}
      <Text style={styles.title}>{prayer.title}</Text>
      {prayer.subtitle && <Text style={styles.subtitle}>{prayer.subtitle}</Text>}
      {prayer.content.map((paragraph, i) => (
        <Text key={i} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  rubric: {
    fontSize: fonts.sizes.sm,
    fontStyle: 'italic',
    color: colors.gold,
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  paragraph: {
    fontSize: fonts.sizes.md,
    color: colors.textPrimary,
    lineHeight: 26,
    marginBottom: spacing.md,
  },
});
