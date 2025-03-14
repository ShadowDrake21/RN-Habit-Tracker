import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'tamagui';

import HabitsItem from '~/components/home/HabitsItem';

export default function Home() {
  const { bottom } = useSafeAreaInsets();
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <ScrollView flex={1} gap={30} paddingHorizontal={20} pb={bottom}>
        <HabitsItem title="Sport" link="sport" />
        <HabitsItem title="English" link="english" />
        <HabitsItem title="Polish" link="polish" />
        <HabitsItem title="Reading" link="reading" />
        <HabitsItem title="Programming" link="programming" />
        <HabitsItem title="Meditation" link="meditation" />
      </ScrollView>
    </>
  );
}
