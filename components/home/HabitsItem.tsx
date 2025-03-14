import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React, { useRef } from 'react';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { YStack, SizableText, H5, XStack } from 'tamagui';

import { agendaItems, getMarkedDates } from './utils';

import { habitsProgressStyles } from '~/constants/colors.contants';

type HabitsItemProps = {
  title: string;
  link: string;
};

const ITEMS: any[] = agendaItems;

const HabitsItem = ({ title, link }: HabitsItemProps) => {
  const marked = useRef(getMarkedDates());

  const dayComponent = ({
    date,
    styleType,
  }: {
    date: any;
    styleType: keyof typeof habitsProgressStyles;
  }) => {
    const styles = habitsProgressStyles[styleType];

    return (
      <Link href={`/(drawer)/statistics/${date.dateString}`} asChild>
        <YStack
          flex={1}
          w={40}
          h={40}
          backgroundColor={styles.bg}
          borderColor={styles.border}
          borderWidth={1}
          borderRadius={30}
          justifyContent="center"
          alignItems="center">
          <SizableText color={styles.color} style={{ textAlign: 'center' }}>
            {date?.day}
          </SizableText>
        </YStack>
      </Link>
    );
  };

  return (
    <YStack
      backgroundColor="white"
      paddingBottom={20}
      borderTopLeftRadius={15}
      borderTopRightRadius={15}
      marginBottom={20}
      flex={1}>
      <XStack flexDirection="row" p={20} justifyContent="space-between" flex={1}>
        <Link href={`/habit/${link}`} asChild>
          <H5>{title}</H5>
        </Link>
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
          animateScroll
          allowShadow={false}
          dayComponent={({ date }) => {
            if (date?.day! > new Date().getDate()) {
              return dayComponent({ date, styleType: 'disable' });
            } else if (date?.day === new Date().getDate()) {
              return dayComponent({ date, styleType: 'completed' });
            } else if (date?.day === new Date().getDate() - 1) {
              return dayComponent({ date, styleType: 'notCompleted' });
            } else {
              return dayComponent({ date, styleType: 'partiallyCompleted' });
            }
          }}
        />
      </CalendarProvider>
    </YStack>
  );
};

export default HabitsItem;
