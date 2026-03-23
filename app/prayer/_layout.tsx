import { Stack } from 'expo-router';
import { colors, fonts } from '../../src/utils/theme';

export default function PrayerLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.bgPrimary,
        },
        headerTintColor: colors.gold,
        headerTitleStyle: {
          fontSize: fonts.sizes.lg,
          fontWeight: fonts.weights.semibold,
          color: colors.textPrimary,
        },
        contentStyle: {
          backgroundColor: colors.bgPrimary,
        },
      }}
    />
  );
}
