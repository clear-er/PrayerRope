import { useMemo } from 'react';
import type { RopeSession, CalendarDay } from '../types';

export function useCalendarData(sessions: RopeSession[], numDays: number = 90): CalendarDay[] {
  return useMemo(() => {
    const map = new Map<string, CalendarDay>();

    // Initialize last numDays
    const today = new Date();
    for (let i = numDays - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      map.set(dateStr, { date: dateStr, knotCount: 0, sessionCount: 0 });
    }

    // Aggregate sessions
    for (const session of sessions) {
      const dateStr = session.date.split('T')[0];
      const day = map.get(dateStr);
      if (day) {
        day.knotCount += session.completedKnots;
        day.sessionCount += 1;
      }
    }

    return Array.from(map.values());
  }, [sessions, numDays]);
}
