import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { prayerSets } from '../data';
import { colors, fonts, spacing, borderRadius } from '../utils/theme';
import type { PrayerSet } from '../types';

interface Props {
  visible: boolean;
  selectedId: string;
  onSelect: (set: PrayerSet) => void;
  onClose: () => void;
}

export const PrayerSetPicker = React.memo(function PrayerSetPicker({ visible, selectedId, onSelect, onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet}>
          <View style={styles.handle} />
          <Text style={styles.title}>Choose a Prayer</Text>
          <FlatList
            data={prayerSets}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.item, item.id === selectedId && styles.selectedItem]}
                onPress={() => onSelect(item)}
                activeOpacity={0.7}
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDesc} numberOfLines={2}>{item.description}</Text>
                  <Text style={styles.itemKnots}>{item.defaultKnotCount} knots</Text>
                </View>
                {item.id === selectedId && (
                  <Ionicons name="checkmark-circle" size={24} color={colors.gold} />
                )}
              </TouchableOpacity>
            )}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
});

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.bgSecondary,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
    maxHeight: '70%',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.textMuted,
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: spacing.md,
  },
  title: {
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  selectedItem: {
    borderColor: colors.gold,
    borderWidth: 1,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  itemDesc: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  itemKnots: {
    fontSize: fonts.sizes.xs,
    color: colors.gold,
  },
});
