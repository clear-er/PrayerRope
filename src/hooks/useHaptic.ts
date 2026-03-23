import { useCallback } from 'react';
import * as Haptics from 'expo-haptics';
import { useSettings } from './useSettings';

export function useHaptic() {
  const { settings } = useSettings();

  const trigger = useCallback(
    (type: Haptics.ImpactFeedbackStyle = Haptics.ImpactFeedbackStyle.Medium) => {
      if (settings.hapticEnabled) {
        Haptics.impactAsync(type);
      }
    },
    [settings.hapticEnabled],
  );

  const notify = useCallback(
    (type: Haptics.NotificationFeedbackType = Haptics.NotificationFeedbackType.Success) => {
      if (settings.hapticEnabled) {
        Haptics.notificationAsync(type);
      }
    },
    [settings.hapticEnabled],
  );

  return { trigger, notify };
}
