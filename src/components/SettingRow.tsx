import React from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, spacing } from '../utils/theme';

interface Props {
  label: string;
  value?: string;
  onPress?: () => void;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  showChevron?: boolean;
}

export const SettingRow = React.memo(function SettingRow({
  label,
  value,
  onPress,
  switchValue,
  onSwitchChange,
  showChevron,
}: Props) {
  const content = (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.right}>
        {value !== undefined && <Text style={styles.value}>{value}</Text>}
        {switchValue !== undefined && onSwitchChange && (
          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
            trackColor={{ false: colors.bgCard, true: colors.goldDark }}
            thumbColor={switchValue ? colors.gold : colors.textMuted}
          />
        )}
        {showChevron && (
          <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
        )}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.bgCard,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    minHeight: 52,
  },
  label: {
    fontSize: fonts.sizes.md,
    color: colors.textPrimary,
    flex: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  value: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
  },
});
