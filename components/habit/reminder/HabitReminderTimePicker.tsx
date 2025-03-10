import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { Button, Text, XStack } from 'tamagui';

import { colors } from '~/constants/colors.contants';

const HabitReminderTimePicker = () => {
  const [reminderTime, setReminderTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <XStack gap={10} alignItems="center">
      <Button
        backgroundColor={colors.primaryButton}
        color={colors.primaryButtonText}
        onPress={() => setOpen(true)}>
        <Ionicons name="notifications-outline" size={24} color={colors.primaryButtonText} />
        <Text color={colors.primaryButtonText}>{format(reminderTime, 'HH:MM')}</Text>
      </Button>
      <Button backgroundColor={colors.primaryButton} color={colors.primaryButtonText}>
        Once
      </Button>
      <DatePicker
        modal
        mode="time"
        open={open}
        date={reminderTime}
        onConfirm={(date) => {
          setOpen(false);
          setReminderTime(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </XStack>
  );
};

export default HabitReminderTimePicker;
