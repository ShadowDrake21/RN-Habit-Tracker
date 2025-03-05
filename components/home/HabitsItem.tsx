import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { color } from '@tamagui/themes';
import React, { useRef } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';
import { YStack, SizableText, H5, XStack, Stack } from 'tamagui';

import { agendaItems, getMarkedDates } from './utils';

import { colors } from '~/constants/colors.contants';

interface Props {
  weekView?: boolean;
}
const ITEMS: any[] = agendaItems;

const progressStyles = {
  completed: {
    bg: '#FFC107',
    color: '#FFF',
    border: '#EECC7A',
  },
  partiallyCompleted: {
    bg: '#a68e55',
    color: '#d6b76d',
    border: '#d6b76d',
  },
  notCompleted: {
    bg: '#8E7A49',
    color: '#77663d',
    border: '#77663d',
  },
  disable: {
    bg: '#40464e',
    color: '#111822',
    border: '#111822',
  },
};

const HabitsItem = (props: Props) => {
  const marked = useRef(getMarkedDates());
  // const theme = useRef(getTheme());

  return (
    <YStack backgroundColor="white" borderTopLeftRadius={15} borderTopRightRadius={15}>
      <YStack>
        <XStack flexDirection="row" p={20} justifyContent="space-between">
          <H5>Sport</H5>
          <XStack justifyContent="space-between" alignItems="center">
            <SizableText theme="alt2" size="$3">
              Everyday
            </SizableText>
            <MaterialIcons name="notifications-none" size={24} color="black" />
          </XStack>
        </XStack>
        <CalendarProvider date={ITEMS[1]?.title} style={{ flex: 1, padding: 0, margin: 0 }}>
          <ExpandableCalendar
            disablePan
            hideKnob
            disableWeekScroll
            disableMonthChange
            firstDay={1}
            markedDates={marked.current}
            pagingEnabled={false}
            scrollEnabled={false}
            hideArrows
            maxDate={new Date().toISOString().split('T')[0]}
            // theme={theme.current}
            animateScroll
            allowShadow={false}
            dayComponent={({ date, state }) => {
              if (date?.day! > new Date().getDate()) {
                return (
                  <YStack
                    flex={1}
                    w={40}
                    h={40}
                    backgroundColor={progressStyles.disable.bg}
                    borderColor={progressStyles.disable.border}
                    borderWidth={1}
                    borderRadius={30}
                    justifyContent="center"
                    alignItems="center">
                    <SizableText
                      color={progressStyles.disable.color}
                      style={{ textAlign: 'center' }}>
                      {date?.day}
                    </SizableText>
                  </YStack>
                );
              } else if (date?.day === new Date().getDate()) {
                return (
                  <YStack
                    flex={1}
                    w={40}
                    h={40}
                    backgroundColor={progressStyles.completed.bg}
                    borderColor={progressStyles.completed.border}
                    borderWidth={1}
                    borderRadius={30}
                    justifyContent="center"
                    alignItems="center">
                    <SizableText
                      color={progressStyles.completed.color}
                      style={{ textAlign: 'center' }}>
                      {date?.day}
                    </SizableText>
                  </YStack>
                );
              } else if (date?.day === new Date().getDate() - 1) {
                return (
                  <YStack
                    flex={1}
                    w={40}
                    h={40}
                    backgroundColor={progressStyles.notCompleted.bg}
                    borderColor={progressStyles.notCompleted.border}
                    borderWidth={1}
                    borderRadius={30}
                    justifyContent="center"
                    alignItems="center">
                    <SizableText
                      color={progressStyles.notCompleted.color}
                      style={{ textAlign: 'center' }}>
                      {date?.day}
                    </SizableText>
                  </YStack>
                );
              } else {
                return (
                  <YStack
                    flex={1}
                    w={40}
                    h={40}
                    backgroundColor={progressStyles.partiallyCompleted.bg}
                    borderColor={progressStyles.partiallyCompleted.border}
                    borderWidth={1}
                    borderRadius={30}
                    justifyContent="center"
                    alignItems="center">
                    <SizableText
                      color={progressStyles.partiallyCompleted.color}
                      style={{ textAlign: 'center' }}>
                      {date?.day}
                    </SizableText>
                  </YStack>
                );
              }
            }}
          />
        </CalendarProvider>
      </YStack>
    </YStack>
  );
};

export default HabitsItem;

const themeColor = '#00AAAF';

// function getTheme() {
//   const disabledColor = 'grey';

//   return {
//     // arrows
//     arrowColor: 'black',
//     arrowStyle: { padding: 0 },
//     // knob
//     expandableKnobColor: themeColor,
//     // month
//     monthTextColor: 'black',
//     textMonthFontSize: 16,
//     textMonthFontFamily: 'HelveticaNeue',
//     textMonthFontWeight: 'bold' as const,
//     // day names
//     textSectionTitleColor: 'black',
//     textDayHeaderFontSize: 12,
//     textDayHeaderFontFamily: 'HelveticaNeue',
//     textDayHeaderFontWeight: 'normal' as const,
//     // dates
//     dayTextColor: themeColor,
//     todayTextColor: '#af0078',
//     textDayFontSize: 18,
//     textDayFontFamily: 'HelveticaNeue',
//     textDayFontWeight: '500' as const,
//     textDayStyle: { marginTop: Platform.OS === 'android' ? 2 : 4 },
//     // selected date
//     selectedDayBackgroundColor: themeColor,
//     selectedDayTextColor: 'white',
//     // disabled date
//     textDisabledColor: disabledColor,
//     // dot (marked date)
//     dotColor: themeColor,
//     selectedDotColor: 'white',
//     disabledDotColor: disabledColor,
//     dotStyle: { marginTop: -2 },
//   };
// }
