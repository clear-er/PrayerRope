import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../src/utils/theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.bgPrimary },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="prayer"
          options={{
            headerShown: false,
            presentation: 'card',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
