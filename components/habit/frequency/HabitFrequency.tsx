import React from 'react';
import { H6, Text, XStack } from 'tamagui';

import HabitFrequencyActions from './HabitFrequencyActions';

import { colors } from '~/constants/colors.contants';

const HabitFrequency = () => {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      padding={20}
      backgroundColor={colors.secondaryBackground}>
      <H6>Frequency</H6>
      <XStack gap={15} alignItems="center">
        <Text>Times a week:</Text>
        <HabitFrequencyActions />
      </XStack>
    </XStack>
  );
};

export default HabitFrequency;
