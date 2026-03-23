import { useCallback } from 'react';
import { useStorage } from './useStorage';
import type { PrayerStats, RopeSession } from '../types';

const defaultStats: PrayerStats = {
  totalSessions: 0,
  totalKnots: 0,
  currentStreak: 0,
  longestStreak: 0,
  sessions: [],
  lastPrayerDate: null,
};

function getDateString(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

function calculateStreak(lastDate: string | null, currentStreak: number): number {
  if (!lastDate) return 1;

  const today = getDateString();
  if (lastDate === today) return currentStreak;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (lastDate === getDateString(yesterday)) return currentStreak + 1;

  return 1;
}

export function usePrayerStats() {
  const [stats, setStats, loading] = useStorage<PrayerStats>('prayer-stats', defaultStats);

  const addSession = useCallback(
    (session: RopeSession) => {
      setStats((prev) => {
        const newStreak = calculateStreak(prev.lastPrayerDate, prev.currentStreak);
        return {
          totalSessions: prev.totalSessions + 1,
          totalKnots: prev.totalKnots + session.completedKnots,
          currentStreak: newStreak,
          longestStreak: Math.max(prev.longestStreak, newStreak),
          sessions: [...prev.sessions, session],
          lastPrayerDate: getDateString(),
        };
      });
    },
    [setStats],
  );

  return { stats, addSession, loading };
}
