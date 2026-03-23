import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, spacing } from '../utils/theme';

interface Props {
  icon?: string;
  message: string;
}

export const EmptyState = React.memo(function EmptyState({ icon = 'heart-outline', message }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon as any} size={48} color={colors.textMuted} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
  },
  message: {
    fontSize: fonts.sizes.md,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.md,
    lineHeight: 22,
  },
});
