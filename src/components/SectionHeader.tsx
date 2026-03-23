import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, spacing, borderRadius } from '../utils/theme';

interface Props {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export const SectionHeader = React.memo(function SectionHeader({ title, isExpanded, onToggle }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onToggle} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons
        name={isExpanded ? 'chevron-up' : 'chevron-down'}
        size={20}
        color={colors.gold}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.bgCard,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  title: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semibold,
    color: colors.gold,
    flex: 1,
  },
});
