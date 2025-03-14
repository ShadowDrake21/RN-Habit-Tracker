import Feather from '@expo/vector-icons/Feather';
import { Stack, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ScrollView, YStack } from 'tamagui';

import HabitsItem from '~/components/home/HabitsItem';
import { colors } from '~/constants/colors.contants';

export default function Home() {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <ScrollView contentContainerStyle={{ gap: 10 }} flex={1} padding={20} pb={bottom}>
        <Button
          flex={1}
          color={colors.primaryButton}
          onPress={() => router.push('/(drawer)/(habits)/create')}>
          <Feather name="plus-square" size={24} color={colors.primaryButton} /> Add a new habit
        </Button>
        <YStack gap={10}>
          <HabitsItem title="Sport" link="sport" />
          <HabitsItem title="English" link="english" />
          <HabitsItem title="Polish" link="polish" />
          <HabitsItem title="Reading" link="reading" />
          <HabitsItem title="Programming" link="programming" />
          <HabitsItem title="Meditation" link="meditation" />
        </YStack>
      </ScrollView>
    </>
  );
}
