import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { allHours } from '../../src/data';
import { useCurrentHour } from '../../src/hooks/useCurrentHour';
import { AgpeyaHourCard } from '../../src/components/AgpeyaHourCard';
import { colors, fonts, spacing } from '../../src/utils/theme';
import type { AgpeyaHour } from '../../src/types';

export default function AgpeyaTab() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const currentHour = useCurrentHour();

  const handleHourPress = (hour: AgpeyaHour) => {
    router.push(`/prayer/${hour.id}`);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={allHours}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Agpeya</Text>
            <Text style={styles.subtitle}>Book of Hours</Text>
            <View style={styles.currentBanner}>
              <Text style={styles.currentLabel}>Current Hour</Text>
              <Text style={styles.currentName}>{currentHour.name}</Text>
              <Text style={styles.currentArabic}>{currentHour.arabicName}</Text>
              <Text style={styles.currentTime}>{currentHour.canonicalTime}</Text>
              <Text style={styles.currentDesc}>{currentHour.description}</Text>
            </View>
            <Text style={styles.allHoursLabel}>All Hours</Text>
          </View>
        }
        renderItem={({ item }) => (
          <AgpeyaHourCard
            hour={item}
            isCurrent={item.id === currentHour.id}
            onPress={() => handleHourPress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  list: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
  },
  header: {
    marginBottom: spacing.md,
  },
  title: {
    fontSize: fonts.sizes.xxl,
    fontWeight: fonts.weights.bold,
    color: colors.gold,
    marginTop: spacing.md,
  },
  subtitle: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  currentBanner: {
    backgroundColor: colors.bgElevated,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.gold,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  currentLabel: {
    fontSize: fonts.sizes.xs,
    color: colors.gold,
    fontWeight: fonts.weights.semibold,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  currentName: {
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
  },
  currentArabic: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  currentTime: {
    fontSize: fonts.sizes.sm,
    color: colors.gold,
    fontWeight: fonts.weights.medium,
    marginBottom: spacing.xs,
  },
  currentDesc: {
    fontSize: fonts.sizes.sm,
    color: colors.textMuted,
    lineHeight: 18,
  },
  allHoursLabel: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    fontWeight: fonts.weights.semibold,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
});
