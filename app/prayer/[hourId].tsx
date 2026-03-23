import { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { getHourById, commonOpening, commonClosing } from '../../src/data';
import { PrayerText } from '../../src/components/PrayerText';
import { SectionHeader } from '../../src/components/SectionHeader';
import { colors, spacing } from '../../src/utils/theme';
import type { PrayerSection } from '../../src/types';

export default function PrayerReader() {
  const { hourId } = useLocalSearchParams<{ hourId: string }>();
  const hour = getHourById(hourId);

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {
      'common-opening': false,
      'common-closing': false,
    };
    if (hour) {
      hour.sections.forEach((s) => {
        initial[s.id] = true;
      });
    }
    return initial;
  });

  const toggleSection = useCallback((id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  if (!hour) return null;

  const renderSection = (section: PrayerSection) => {
    const isExpanded = expandedSections[section.id] ?? true;
    return (
      <View key={section.id}>
        <SectionHeader
          title={section.title}
          isExpanded={isExpanded}
          onToggle={() => toggleSection(section.id)}
        />
        {isExpanded &&
          section.prayers.map((prayer) => (
            <PrayerText key={prayer.id} prayer={prayer} />
          ))}
      </View>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: hour.name,
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Common Opening */}
        <View>
          <SectionHeader
            title="Common Opening"
            isExpanded={expandedSections['common-opening'] ?? false}
            onToggle={() => toggleSection('common-opening')}
          />
          {expandedSections['common-opening'] &&
            commonOpening.map((prayer) => (
              <PrayerText key={prayer.id} prayer={prayer} />
            ))}
        </View>

        {/* Hour-specific sections */}
        {hour.sections.map(renderSection)}

        {/* Common Closing */}
        <View>
          <SectionHeader
            title="Common Closing"
            isExpanded={expandedSections['common-closing'] ?? false}
            onToggle={() => toggleSection('common-closing')}
          />
          {expandedSections['common-closing'] &&
            commonClosing.map((prayer) => (
              <PrayerText key={prayer.id} prayer={prayer} />
            ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  content: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xxl,
  },
});
