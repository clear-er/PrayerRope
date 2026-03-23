import { useCallback } from 'react';
import { useStorage } from './useStorage';
import type { AppSettings } from '../types';

const defaultSettings: AppSettings = {
  reminders: { enabled: false, hours: {} },
  dailyGoal: { targetSessions: 3, targetKnots: 100 },
  preferredKnotCount: 33,
  hapticEnabled: true,
  currentSeason: 'standard',
};

export function useSettings() {
  const [settings, setSettings, loading] = useStorage<AppSettings>('app-settings', defaultSettings);

  const updateSettings = useCallback(
    (partial: Partial<AppSettings>) => {
      setSettings((prev) => ({ ...prev, ...partial }));
    },
    [setSettings],
  );

  return { settings, updateSettings, loading };
}
