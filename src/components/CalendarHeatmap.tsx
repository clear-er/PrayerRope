import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, spacing, borderRadius } from '../utils/theme';
import type { CalendarDay } from '../types';

interface Props {
  data: CalendarDay[];
}

const DAY_SIZE = 14;
const DAY_GAP = 2;
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function getHeatmapColor(knotCount: number, maxKnots: number): string {
  if (knotCount === 0) return colors.heatmap0;
  const ratio = knotCount / Math.max(maxKnots, 1);
  if (ratio < 0.25) return colors.heatmap1;
  if (ratio < 0.5) return colors.heatmap2;
  if (ratio < 0.75) return colors.heatmap3;
  return colors.heatmap4;
}

export const CalendarHeatmap = React.memo(function CalendarHeatmap({ data }: Props) {
  const maxKnots = Math.max(...data.map((d) => d.knotCount), 1);

  // Group by weeks (columns)
  const weeks: CalendarDay[][] = [];
  let currentWeek: CalendarDay[] = [];

  // Pad the first week to align with day of week
  if (data.length > 0) {
    const firstDay = new Date(data[0].date).getDay();
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push({ date: '', knotCount: -1, sessionCount: 0 });
    }
  }

  for (const day of data) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.grid}>
          {/* Day labels */}
          <View style={styles.dayLabels}>
            {DAYS.map((d, i) => (
              <Text key={i} style={styles.dayLabel}>
                {i % 2 === 1 ? d : ''}
              </Text>
            ))}
          </View>
          {/* Weeks */}
          {weeks.map((week, wi) => (
            <View key={wi} style={styles.week}>
              {week.map((day, di) => (
                <View
                  key={di}
                  style={[
                    styles.day,
                    {
                      backgroundColor:
                        day.knotCount < 0
                          ? 'transparent'
                          : getHeatmapColor(day.knotCount, maxKnots),
                    },
                  ]}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  title: {
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.semibold,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  grid: {
    flexDirection: 'row',
  },
  dayLabels: {
    marginRight: DAY_GAP,
  },
  dayLabel: {
    width: DAY_SIZE,
    height: DAY_SIZE,
    fontSize: 9,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: DAY_SIZE,
    marginBottom: DAY_GAP,
  },
  week: {
    marginRight: DAY_GAP,
  },
  day: {
    width: DAY_SIZE,
    height: DAY_SIZE,
    borderRadius: 3,
    marginBottom: DAY_GAP,
  },
});
