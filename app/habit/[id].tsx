import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Calendar, CalendarUtils } from 'react-native-calendars';
import { BarChart } from 'react-native-gifted-charts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Separator,
  SizeTokens,
  Button,
  H6,
  Text,
  XStack,
  YStack,
  Switch,
  ScrollView,
} from 'tamagui';

import { colors } from '~/constants/colors.contants';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [frequency, setFrequency] = useState(0);
  const [reminderTime, setReminderTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(new Date().toISOString().split('T')[0]);
  const [staticticType, setStaticticType] = useState<'month' | 'year'>('year');
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();

  const barData = [
    { value: 250, label: 'M' },
    { value: 500, label: 'T', frontColor: '#177AD5' },
    { value: 745, label: 'W', frontColor: '#177AD5' },
    { value: 320, label: 'T' },
    { value: 600, label: 'F', frontColor: '#177AD5' },
    { value: 256, label: 'S' },
    { value: 300, label: 'S' },
  ];

  const getDate = (count: number) => {
    const date = new Date();
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback((day: any) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [getDate(-1)]: {
        dotColor: 'red',
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'orange',
        selectedTextColor: 'red',
      },
    };
  }, [selected]);

  return (
    <>
      <Stack.Screen
        options={{
          title: id.charAt(0).toUpperCase() + id.slice(1),
        }}
      />
      <ScrollView paddingHorizontal={20} gap={10} flex={1} pb={bottom + 50} maxHeight="100%">
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
            <Button onPress={() => setShow(true)}>
              <Ionicons name="notifications-outline" size={24} color="black" />
              <Text>{format(reminderTime, 'HH:00')}</Text>
            </Button>

            <Button onPress={() => setFrequency((prev) => prev + 1)}>+</Button>
          </XStack>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={reminderTime}
              mode="time"
              is24Hour
              onChange={(event: DateTimePickerEvent, date?: Date) => {
                setReminderTime(date || reminderTime);
                setShow(false);
              }}
            />
          )}
          <SwitchWithLabel size="$2" defaultChecked />
        </XStack>
        <YStack
          width="100%"
          justifyContent="center"
          alignItems="center"
          w="100%"
          p={25}
          flexDirection="column"
          bg="#f0f0f0">
          <H6>History</H6>
          <Calendar
            enableSwipeMonths
            // style={{ marginButtom: 20 }}
            onDayPress={onDayPress}
            maxDate={new Date().toISOString().split('T')[0]}
            disableAllTouchEventsForInactiveDays
            markedDates={{
              ...marked,
              [getDate(3)]: {
                inactive: true,
              },
              [getDate(4)]: {
                inactive: true,
              },
            }}
            style={{
              width: width - 80,
            }}
            dayComponent={(date: { date: { day: string } }, state: string) => {
              return (
                <XStack
                  width={40}
                  height={40}
                  backgroundColor={state === 'disabled' ? 'grey' : colors.primaryButton}
                  justifyContent="center"
                  alignItems="center">
                  <Text
                    style={[
                      styles.customDay,
                      // state === 'disabled' ? styles.disabledText : styles.defaultText,
                    ]}
                    color={state === 'disabled' ? 'grey' : colors.primaryText}
                    fontWeight={state === 'disabled' ? 400 : 700}>
                    {date.date?.day}
                  </Text>
                </XStack>
              );
            }}
          />
        </YStack>
        <YStack bg="#f0f0f0">
          <XStack>
            <H6>Statistic</H6>
            <XStack>
              <Text>Times a week:</Text>
              <Button
                onPress={() => setStaticticType('month')}
                backgroundColor={
                  staticticType === 'month' ? colors.primaryButton : colors.background
                }>
                Month
              </Button>
              <Button
                onPress={() => setStaticticType('year')}
                backgroundColor={
                  staticticType === 'year' ? colors.primaryButton : colors.background
                }>
                Year
              </Button>
            </XStack>
          </XStack>
          <Separator />
          <BarChart
            barWidth={22}
            noOfSections={3}
            barBorderRadius={4}
            frontColor="lightgray"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
          />
        </YStack>
      </ScrollView>
    </>
  );
};
export function SwitchWithLabel(props: { size: SizeTokens; defaultChecked?: boolean }) {
  const id = `switch-${props.size.toString().slice(1)}-${props.defaultChecked ?? ''}}`;
  return (
    <XStack width={200} alignItems="center" gap="$4">
      <Switch id={id} size={props.size} defaultChecked={props.defaultChecked}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
    </XStack>
  );
}

export default Page;

const styles = StyleSheet.create({
  disabledText: {
    color: 'grey',
  },
  defaultText: {
    color: 'purple',
  },
  customDay: {
    textAlign: 'center',
  },
});
