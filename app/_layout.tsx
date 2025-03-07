import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, XStack } from 'tamagui';

import config from '../tamagui.config';

import { colors } from '~/constants/colors.contants';

SplashScreen.preventAutoHideAsync();

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(drawer)',
// };

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.tintColor,
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 20,
            },
          }}>
          <Stack.Screen name="index" options={{ title: 'Onboarding', headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
          <Stack.Screen
            name="habit/[id]"
            options={{
              headerBackVisible: false,
              headerLeft: ({ tintColor }) => (
                <Entypo name="chevron-thin-left" size={24} color="black" />
              ),
              headerRight: ({ tintColor }) => (
                <XStack gap={20}>
                  <Ionicons name="share-social-outline" size={24} color={tintColor} />
                  <Feather name="settings" size={24} color={tintColor} />
                </XStack>
              ),
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
