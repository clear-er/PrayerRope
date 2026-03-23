import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, spacing, borderRadius } from '../utils/theme';

interface Props {
  label: string;
  value: string | number;
}

export const StatCard = React.memo(function StatCard({ label, value }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    marginHorizontal: spacing.xs,
  },
  value: {
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.bold,
    color: colors.gold,
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: fonts.sizes.xs,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
