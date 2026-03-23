import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useStorage<T>(key: string, defaultValue: T): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  const [value, setValue] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((stored) => {
        if (stored !== null) {
          setValue(JSON.parse(stored));
        }
      })
      .finally(() => setLoading(false));
  }, [key]);

  const setAndPersist = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof newValue === 'function'
          ? (newValue as (prev: T) => T)(prev)
          : newValue;
        AsyncStorage.setItem(key, JSON.stringify(resolved));
        return resolved;
      });
    },
    [key],
  );

  return [value, setAndPersist, loading];
}
