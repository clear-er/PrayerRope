export interface Prayer {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];  // Array of paragraphs/verses
  rubric?: string;    // Liturgical instruction (e.g., "Say this 3 times")
}

export interface PrayerSection {
  id: string;
  title: string;
  prayers: Prayer[];
}

export interface AgpeyaHour {
  id: string;
  name: string;
  arabicName: string;
  hourNumber: number;
  description: string;
  canonicalTime: string;    // e.g., "6:00 AM"
  canonicalHour: number;    // 24h format for scheduling
  sections: PrayerSection[];
  seasonal?: SeasonalVariation[];
}

export interface SeasonalVariation {
  season: Season;
  replacements: {
    sectionId: string;
    sections: PrayerSection[];
  }[];
  additions: PrayerSection[];
}

export type Season = 'standard' | 'kiahk' | 'lent' | 'pascha' | 'pentecost' | 'feast';

export interface PrayerSet {
  id: string;
  name: string;
  prayer: string;           // The prayer text to repeat
  defaultKnotCount: number;
  description: string;
}

export interface RopeSession {
  id: string;
  date: string;            // ISO date string
  prayerSetId: string;
  knotCount: number;
  completedKnots: number;
  durationMs: number;
  completed: boolean;
  timestamp: number;
}

export interface DailyGoal {
  targetSessions: number;
  targetKnots: number;
}

export interface PrayerStats {
  totalSessions: number;
  totalKnots: number;
  currentStreak: number;
  longestStreak: number;
  sessions: RopeSession[];
  lastPrayerDate: string | null;
}

export interface ReminderSettings {
  enabled: boolean;
  hours: {
    [hourId: string]: {
      enabled: boolean;
      customTime?: string;  // Override canonical time, HH:mm format
    };
  };
}

export interface AppSettings {
  reminders: ReminderSettings;
  dailyGoal: DailyGoal;
  preferredKnotCount: number;
  hapticEnabled: boolean;
  currentSeason: Season;
}

export interface CalendarDay {
  date: string;
  knotCount: number;
  sessionCount: number;
}
