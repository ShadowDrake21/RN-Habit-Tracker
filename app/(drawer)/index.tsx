import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import HabitsItem from '~/components/home/HabitsItem';

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <Container>
        <HabitsItem />
      </Container>
    </>
  );
}
