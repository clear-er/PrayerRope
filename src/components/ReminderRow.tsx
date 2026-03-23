import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { colors, fonts, spacing } from '../utils/theme';
import type { AgpeyaHour } from '../types';

interface Props {
  hour: AgpeyaHour;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export const ReminderRow = React.memo(function ReminderRow({ hour, enabled, onToggle }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <Text style={styles.name}>{hour.name}</Text>
        <Text style={styles.time}>{hour.canonicalTime}</Text>
      </View>
      <Switch
        value={enabled}
        onValueChange={onToggle}
        trackColor={{ false: colors.bgPrimary, true: colors.goldDark }}
        thumbColor={enabled ? colors.gold : colors.textMuted}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.bgCard,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    minHeight: 48,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: fonts.sizes.md,
    color: colors.textPrimary,
  },
  time: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
