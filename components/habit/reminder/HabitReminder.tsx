import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { H6, Text, XStack, Button } from 'tamagui';

import HabitReminderTimePicker from './HabitReminderTimePicker';
import { SwitchWithLabel } from '../../shared/SwitchWithLabel';

import { colors } from '~/constants/colors.contants';

const HabitReminder = () => {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      padding={20}
      backgroundColor={colors.secondaryBackground}>
      <H6>Reminder</H6>
      <HabitReminderTimePicker />
      <SwitchWithLabel size="$2" defaultChecked />
    </XStack>
  );
};

export default HabitReminder;
