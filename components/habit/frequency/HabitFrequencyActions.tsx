import React, { useCallback, useState } from 'react';
import { Button, Text, XStack } from 'tamagui';

import { colors } from '~/constants/colors.contants';

const HabitFrequencyActions = () => {
  const [frequency, setFrequency] = useState(0);

  const frequencyIncrement = useCallback(() => setFrequency((prev) => prev + 1), []);

  const frequencyDecrement = useCallback(
    () => setFrequency((prev) => (prev > 0 ? prev - 1 : prev)),
    []
  );
  return (
    <XStack>
      <Button
        backgroundColor={colors.primaryButton}
        color={colors.primaryButtonText}
        fontWeight={700}
        onPress={frequencyDecrement}>
        -
      </Button>
      <XStack alignItems="center" width={50} justifyContent="center">
        <Text fontWeight={700}>{frequency}</Text>
      </XStack>
      <Button
        backgroundColor={colors.primaryButton}
        color={colors.primaryButtonText}
        fontWeight={700}
        onPress={frequencyIncrement}>
        +
      </Button>
    </XStack>
  );
};

export default HabitFrequencyActions;
