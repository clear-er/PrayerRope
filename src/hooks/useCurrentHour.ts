import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { getCurrentHour } from '../data';
import type { AgpeyaHour } from '../types';

export function useCurrentHour(): AgpeyaHour {
  const [hour, setHour] = useState<AgpeyaHour>(getCurrentHour());

  useFocusEffect(
    useCallback(() => {
      setHour(getCurrentHour());
    }, []),
  );

  return hour;
}
