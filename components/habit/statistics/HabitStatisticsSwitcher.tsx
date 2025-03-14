import React, { useState } from 'react';
import { Button, Text, XStack } from 'tamagui';

import { colors } from '~/constants/colors.contants';

const HabitStatisticsSwitcher = () => {
  const [staticticType, setStaticticType] = useState<'month' | 'year'>('year');

  return (
    <XStack alignItems="center" gap={10}>
      <Text>Times of:</Text>
      <Button
        onPress={() => setStaticticType('month')}
        backgroundColor={staticticType === 'month' ? colors.primaryButton : colors.background}
        color={staticticType === 'month' ? colors.primaryButtonText : colors.primaryText}>
        Month
      </Button>
      <Button
        onPress={() => setStaticticType('year')}
        backgroundColor={staticticType === 'year' ? colors.primaryButton : colors.background}
        color={staticticType === 'year' ? colors.primaryButtonText : colors.primaryText}>
        Year
      </Button>
    </XStack>
  );
};

export default HabitStatisticsSwitcher;
