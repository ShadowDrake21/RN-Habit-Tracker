import Ionicons from '@expo/vector-icons/Ionicons';
import { format } from 'date-fns';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Separator, SizeTokens, Label, Button, H6, Text, XStack, YStack, Switch } from 'tamagui';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [frequency, setFrequency] = useState(0);
  const [reminderTime, setReminderTime] = useState(new Date());

  return (
    <>
      <Stack.Screen
        options={{
          title: id.charAt(0).toUpperCase() + id.slice(1),
        }}
      />
      <YStack>
        <XStack>
          <H6>Frequency</H6>
          <Text>Times a week:</Text>
          <XStack>
            <Button onPress={() => setFrequency((prev) => (prev > 0 ? prev - 1 : prev))}>-</Button>
            <Text>{frequency}</Text>
            <Button onPress={() => setFrequency((prev) => prev + 1)}>+</Button>
          </XStack>
        </XStack>
        <XStack>
          <H6>Reminder</H6>
          <XStack>
            <Button>
              <Ionicons name="notifications-outline" size={24} color="black" />
              <Text>{format(reminderTime, 'HH:00')}</Text>
            </Button>

            <Button onPress={() => setFrequency((prev) => prev + 1)}>+</Button>
          </XStack>

          <SwitchWithLabel size="$2" defaultChecked />
        </XStack>
      </YStack>
    </>
  );
};
export function SwitchWithLabel(props: { size: SizeTokens; defaultChecked?: boolean }) {
  const id = `switch-${props.size.toString().slice(1)}-${props.defaultChecked ?? ''}}`;
  return (
    <XStack width={200} alignItems="center" gap="$4">
      {/* <Label
        paddingRight="$0"
        minWidth={90}
        justifyContent="flex-end"
        size={props.size}
        htmlFor={id}>
        Accept
      </Label> */}
      {/* <Separator minHeight={20} vertical /> */}
      <Switch id={id} size={props.size} defaultChecked={props.defaultChecked}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
    </XStack>
  );
}

export default Page;

const styles = StyleSheet.create({});
