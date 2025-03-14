import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, ScrollView } from 'tamagui';

import HabitFrequency from '~/components/habit/frequency/HabitFrequency';
import HabitHistory from '~/components/habit/history/HabitHistory';
import HabitReminder from '~/components/habit/reminder/HabitReminder';
import HabitStatistics from '~/components/habit/statistics/HabitStatistics';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen
        options={{
          title: id.charAt(0).toUpperCase() + id.slice(1),
        }}
      />
      <ScrollView
        paddingHorizontal={20}
        flex={1}
        maxHeight="100%"
        showsVerticalScrollIndicator={false}>
        <YStack flex={1} gap={15} pt={10} pb={bottom + 50}>
          <HabitFrequency />
          <HabitReminder />
          <HabitHistory />
          <HabitStatistics />
        </YStack>
      </ScrollView>
    </>
  );
};

export default Page;
