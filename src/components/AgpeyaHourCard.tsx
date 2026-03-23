import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, spacing, borderRadius } from '../utils/theme';
import type { AgpeyaHour } from '../types';

interface Props {
  hour: AgpeyaHour;
  isCurrent: boolean;
  onPress: () => void;
}

export const AgpeyaHourCard = React.memo(function AgpeyaHourCard({ hour, isCurrent, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, isCurrent && styles.currentCard]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftAccent}>
        {isCurrent && <View style={styles.goldBar} />}
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{hour.name}</Text>
          <Text style={styles.time}>{hour.canonicalTime}</Text>
        </View>
        <Text style={styles.arabicName}>{hour.arabicName}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {hour.description}
        </Text>
        <Text style={styles.sections}>
          {hour.sections.length} sections
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
    overflow: 'hidden',
  },
  currentCard: {
    backgroundColor: colors.bgElevated,
  },
  leftAccent: {
    width: 4,
    alignSelf: 'stretch',
  },
  goldBar: {
    flex: 1,
    backgroundColor: colors.gold,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  name: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.semibold,
    color: colors.textPrimary,
  },
  time: {
    fontSize: fonts.sizes.sm,
    color: colors.gold,
    fontWeight: fonts.weights.medium,
  },
  arabicName: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: fonts.sizes.sm,
    color: colors.textMuted,
    lineHeight: 18,
  },
  sections: {
    fontSize: fonts.sizes.xs,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
});
