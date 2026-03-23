import { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { allHours } from '../../src/data';
import { useSettings } from '../../src/hooks/useSettings';
import { useReminders } from '../../src/hooks/useReminders';
import { SettingRow } from '../../src/components/SettingRow';
import { ReminderRow } from '../../src/components/ReminderRow';
import { colors, fonts, spacing, borderRadius } from '../../src/utils/theme';
import type { Season } from '../../src/types';

const KNOT_OPTIONS = [33, 50, 100];
const SEASONS: { value: Season; label: string }[] = [
  { value: 'standard', label: 'Standard' },
  { value: 'kiahk', label: 'Kiahk' },
  { value: 'lent', label: 'Great Lent' },
  { value: 'pascha', label: 'Pascha' },
  { value: 'pentecost', label: 'Pentecost' },
  { value: 'feast', label: 'Feast' },
];

export default function SettingsTab() {
  const insets = useSafeAreaInsets();
  const { settings, updateSettings } = useSettings();
  const { scheduleReminders } = useReminders();

  const cycleKnotCount = useCallback(() => {
    const idx = KNOT_OPTIONS.indexOf(settings.preferredKnotCount);
    const next = KNOT_OPTIONS[(idx + 1) % KNOT_OPTIONS.length];
    updateSettings({ preferredKnotCount: next });
  }, [settings.preferredKnotCount, updateSettings]);

  const cycleSeason = useCallback(() => {
    const idx = SEASONS.findIndex((s) => s.value === settings.currentSeason);
    const next = SEASONS[(idx + 1) % SEASONS.length];
    updateSettings({ currentSeason: next.value });
  }, [settings.currentSeason, updateSettings]);

  const adjustGoal = useCallback(
    (field: 'targetKnots' | 'targetSessions', delta: number) => {
      const current = settings.dailyGoal[field];
      const next = Math.max(1, current + delta);
      updateSettings({
        dailyGoal: { ...settings.dailyGoal, [field]: next },
      });
    },
    [settings.dailyGoal, updateSettings],
  );

  const toggleReminders = useCallback(
    (enabled: boolean) => {
      const newReminders = { ...settings.reminders, enabled };
      updateSettings({ reminders: newReminders });
      if (enabled) {
        scheduleReminders(newReminders, allHours);
      }
    },
    [settings.reminders, updateSettings, scheduleReminders],
  );

  const toggleHourReminder = useCallback(
    (hourId: string, enabled: boolean) => {
      const newHours = {
        ...settings.reminders.hours,
        [hourId]: { ...settings.reminders.hours[hourId], enabled },
      };
      const newReminders = { ...settings.reminders, hours: newHours };
      updateSettings({ reminders: newReminders });
      if (settings.reminders.enabled) {
        scheduleReminders(newReminders, allHours);
      }
    },
    [settings.reminders, updateSettings, scheduleReminders],
  );

  const seasonLabel = SEASONS.find((s) => s.value === settings.currentSeason)?.label ?? 'Standard';

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Settings</Text>

      {/* Prayer Settings */}
      <Text style={styles.sectionLabel}>Prayer Settings</Text>
      <View style={styles.group}>
        <SettingRow
          label="Daily Knot Goal"
          value={String(settings.dailyGoal.targetKnots)}
          onPress={() => adjustGoal('targetKnots', 10)}
        />
        <View style={styles.separator} />
        <SettingRow
          label="Daily Session Goal"
          value={String(settings.dailyGoal.targetSessions)}
          onPress={() => adjustGoal('targetSessions', 1)}
        />
        <View style={styles.separator} />
        <SettingRow
          label="Default Knot Count"
          value={String(settings.preferredKnotCount)}
          onPress={cycleKnotCount}
          showChevron
        />
        <View style={styles.separator} />
        <SettingRow
          label="Liturgical Season"
          value={seasonLabel}
          onPress={cycleSeason}
          showChevron
        />
      </View>

      {/* Reminders */}
      <Text style={styles.sectionLabel}>Reminders</Text>
      <View style={styles.group}>
        <SettingRow
          label="Enable Reminders"
          switchValue={settings.reminders.enabled}
          onSwitchChange={toggleReminders}
        />
        {settings.reminders.enabled && (
          <>
            <View style={styles.separator} />
            {allHours.map((hour, i) => (
              <View key={hour.id}>
                {i > 0 && <View style={styles.separator} />}
                <ReminderRow
                  hour={hour}
                  enabled={settings.reminders.hours[hour.id]?.enabled ?? false}
                  onToggle={(enabled) => toggleHourReminder(hour.id, enabled)}
                />
              </View>
            ))}
          </>
        )}
      </View>

      {/* Experience */}
      <Text style={styles.sectionLabel}>Experience</Text>
      <View style={styles.group}>
        <SettingRow
          label="Haptic Feedback"
          switchValue={settings.hapticEnabled}
          onSwitchChange={(enabled) => updateSettings({ hapticEnabled: enabled })}
        />
        <View style={styles.separator} />
        <SettingRow
          label="About"
          value="v1.0.0"
          showChevron
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  content: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
  },
  title: {
    fontSize: fonts.sizes.xxl,
    fontWeight: fonts.weights.bold,
    color: colors.gold,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  sectionLabel: {
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.semibold,
    color: colors.gold,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    marginLeft: spacing.xs,
  },
  group: {
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
  },
  separator: {
    height: 1,
    backgroundColor: colors.bgPrimary,
    marginLeft: spacing.md,
  },
});
