import { useState, useRef, useCallback } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { prayerSets } from '../../src/data';
import { usePrayerStats } from '../../src/hooks/usePrayerStats';
import { useSettings } from '../../src/hooks/useSettings';
import { useHaptic } from '../../src/hooks/useHaptic';
import { useCalendarData } from '../../src/hooks/useCalendarData';
import { KnotCounter } from '../../src/components/KnotCounter';
import { PrayerSetPicker } from '../../src/components/PrayerSetPicker';
import { StatCard } from '../../src/components/StatCard';
import { ProgressRing } from '../../src/components/ProgressRing';
import { CalendarHeatmap } from '../../src/components/CalendarHeatmap';
import { EmptyState } from '../../src/components/EmptyState';
import { colors, fonts, spacing, borderRadius } from '../../src/utils/theme';
import type { PrayerSet, RopeSession } from '../../src/types';

const SCREEN_WIDTH = Dimensions.get('window').width;
const KNOT_COUNTS = [33, 50, 100];

export default function RopeTab() {
  const insets = useSafeAreaInsets();
  const { stats, addSession } = usePrayerStats();
  const { settings } = useSettings();
  const { trigger, notify } = useHaptic();
  const calendarData = useCalendarData(stats.sessions);

  const [selectedSet, setSelectedSet] = useState<PrayerSet>(prayerSets[0]);
  const [knotCount, setKnotCount] = useState(prayerSets[0].defaultKnotCount);
  const [completed, setCompleted] = useState(0);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const startTime = useRef(Date.now());

  const counterSize = Math.min(SCREEN_WIDTH - 64, 300);

  const handleTap = useCallback(() => {
    if (completed >= knotCount) return;

    const next = completed + 1;
    setCompleted(next);
    trigger();

    if (next >= knotCount) {
      notify();
      const session: RopeSession = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        prayerSetId: selectedSet.id,
        knotCount,
        completedKnots: knotCount,
        durationMs: Date.now() - startTime.current,
        completed: true,
        timestamp: Date.now(),
      };
      addSession(session);
    }
  }, [completed, knotCount, selectedSet, trigger, notify, addSession]);

  const handleReset = useCallback(() => {
    setCompleted(0);
    startTime.current = Date.now();
  }, []);

  const handleSelectSet = useCallback((set: PrayerSet) => {
    setSelectedSet(set);
    setKnotCount(set.defaultKnotCount);
    setCompleted(0);
    startTime.current = Date.now();
    setPickerVisible(false);
  }, []);

  const todayStr = new Date().toISOString().split('T')[0];
  const todayKnots = stats.sessions
    .filter((s) => s.date.startsWith(todayStr))
    .reduce((sum, s) => sum + s.completedKnots, 0);
  const dailyProgress = todayKnots / Math.max(settings.dailyGoal.targetKnots, 1);

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={styles.content}
    >
      {/* Prayer set selector */}
      <TouchableOpacity
        style={styles.setSelector}
        onPress={() => setPickerVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={styles.setName}>{selectedSet.name}</Text>
        <Text style={styles.setChange}>Change</Text>
      </TouchableOpacity>

      {/* Knot counter */}
      <TouchableOpacity
        style={styles.counterArea}
        onPress={handleTap}
        activeOpacity={1}
      >
        <KnotCounter total={knotCount} completed={completed} size={counterSize} />
      </TouchableOpacity>

      {/* Prayer text */}
      <Text style={styles.prayerText}>{selectedSet.prayer}</Text>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>

        <View style={styles.knotChips}>
          {KNOT_COUNTS.map((count) => (
            <TouchableOpacity
              key={count}
              style={[styles.chip, count === knotCount && styles.chipActive]}
              onPress={() => {
                setKnotCount(count);
                setCompleted(0);
                startTime.current = Date.now();
              }}
            >
              <Text style={[styles.chipText, count === knotCount && styles.chipTextActive]}>
                {count}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Completion message */}
      {completed >= knotCount && (
        <View style={styles.completeBanner}>
          <Text style={styles.completeText}>Prayer complete! Glory to God.</Text>
        </View>
      )}

      {/* Stats toggle */}
      <TouchableOpacity
        style={styles.statsToggle}
        onPress={() => setShowStats(!showStats)}
      >
        <Text style={styles.statsToggleText}>
          {showStats ? 'Hide Statistics' : 'View Statistics'}
        </Text>
      </TouchableOpacity>

      {/* Stats section */}
      {showStats && (
        <View style={styles.statsSection}>
          {/* Daily progress */}
          <View style={styles.dailyRow}>
            <ProgressRing progress={dailyProgress} size={80} label="today" />
            <View style={styles.dailyInfo}>
              <Text style={styles.dailyKnots}>{todayKnots} knots today</Text>
              <Text style={styles.dailyGoal}>
                Goal: {settings.dailyGoal.targetKnots} knots
              </Text>
            </View>
          </View>

          {/* Stats cards */}
          <View style={styles.statsRow}>
            <StatCard label="Sessions" value={stats.totalSessions} />
            <StatCard label="Total Knots" value={stats.totalKnots} />
          </View>
          <View style={styles.statsRow}>
            <StatCard label="Streak" value={stats.currentStreak} />
            <StatCard label="Best Streak" value={stats.longestStreak} />
          </View>

          {/* Calendar heatmap */}
          {stats.sessions.length > 0 ? (
            <CalendarHeatmap data={calendarData} />
          ) : (
            <EmptyState message="Complete your first prayer rope to see your activity here." />
          )}
        </View>
      )}

      <PrayerSetPicker
        visible={pickerVisible}
        selectedId={selectedSet.id}
        onSelect={handleSelectSet}
        onClose={() => setPickerVisible(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
  },
  setSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  setName: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.semibold,
    color: colors.textPrimary,
  },
  setChange: {
    fontSize: fonts.sizes.sm,
    color: colors.gold,
    fontWeight: fonts.weights.medium,
  },
  counterArea: {
    marginVertical: spacing.lg,
  },
  prayerText: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginBottom: spacing.md,
  },
  resetBtn: {
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  resetText: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    fontWeight: fonts.weights.medium,
  },
  knotChips: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  chip: {
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  chipActive: {
    backgroundColor: colors.gold,
  },
  chipText: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    fontWeight: fonts.weights.medium,
  },
  chipTextActive: {
    color: colors.textOnGold,
  },
  completeBanner: {
    backgroundColor: colors.bgElevated,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
    padding: spacing.md,
    alignSelf: 'stretch',
    marginBottom: spacing.md,
  },
  completeText: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semibold,
    color: colors.success,
    textAlign: 'center',
  },
  statsToggle: {
    paddingVertical: spacing.md,
  },
  statsToggleText: {
    fontSize: fonts.sizes.sm,
    color: colors.gold,
    fontWeight: fonts.weights.medium,
  },
  statsSection: {
    alignSelf: 'stretch',
    marginTop: spacing.sm,
  },
  dailyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  dailyInfo: {
    marginLeft: spacing.md,
    flex: 1,
  },
  dailyKnots: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
  },
  dailyGoal: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
});
