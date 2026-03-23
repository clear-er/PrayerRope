import { useCallback } from 'react';
import * as Notifications from 'expo-notifications';
import type { ReminderSettings, AgpeyaHour } from '../types';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function useReminders() {
  const requestPermission = useCallback(async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  }, []);

  const scheduleReminders = useCallback(
    async (settings: ReminderSettings, hours: AgpeyaHour[]) => {
      await Notifications.cancelAllScheduledNotificationsAsync();

      if (!settings.enabled) return;

      const granted = await requestPermission();
      if (!granted) return;

      for (const hour of hours) {
        const hourSetting = settings.hours[hour.id];
        if (!hourSetting?.enabled) continue;

        let triggerHour = hour.canonicalHour;
        let triggerMinute = 0;

        if (hourSetting.customTime) {
          const [h, m] = hourSetting.customTime.split(':').map(Number);
          triggerHour = h;
          triggerMinute = m;
        }

        await Notifications.scheduleNotificationAsync({
          content: {
            title: `Time for ${hour.name}`,
            body: hour.description,
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: triggerHour,
            minute: triggerMinute,
          },
        });
      }
    },
    [requestPermission],
  );

  const cancelAll = useCallback(async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }, []);

  return { scheduleReminders, cancelAll, requestPermission };
}
