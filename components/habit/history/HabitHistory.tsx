import React, { useCallback, useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { H6, YStack } from 'tamagui';

import HabitHistoryDay from './HabitHistoryDay';

import { colors } from '~/constants/colors.contants';
import { getDate } from '~/utils/miscellaneous.utils';

const HabitHistory = () => {
  const [selected, setSelected] = useState(new Date().toISOString().split('T')[0]);
  const { width } = useWindowDimensions();

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
    <YStack
      width="100%"
      justifyContent="center"
      alignItems="center"
      w="100%"
      p={20}
      flexDirection="column"
      bg={colors.secondaryBackground}
      gap={15}>
      <H6>History</H6>
      <Calendar
        enableSwipeMonths
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
        dayComponent={(date: { date: { day: string } }, state: string) => (
          <HabitHistoryDay date={date} state={state} />
        )}
      />
    </YStack>
  );
};

export default HabitHistory;
