import React from 'react';
import { Text, XStack } from 'tamagui';

import { colors } from '~/constants/colors.contants';

type HabitHistoryDayProps = { date: { date: { day: string } }; state: string };

const HabitHistoryDay = ({ date, state }: HabitHistoryDayProps) => {
  return (
    <XStack
      width={40}
      height={40}
      backgroundColor={state === 'disabled' ? 'grey' : colors.primaryButton}
      justifyContent="center"
      alignItems="center">
      <Text
        textAlign="center"
        color={state === 'disabled' ? 'grey' : colors.primaryButtonText}
        fontWeight={state === 'disabled' ? 400 : 700}>
        {date.date?.day}
      </Text>
    </XStack>
  );
};

export default HabitHistoryDay;
