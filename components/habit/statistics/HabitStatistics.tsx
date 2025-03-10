import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { H6, Separator, XStack, YStack } from 'tamagui';

import HabitStatisticsSwitcher from './HabitStatisticsSwitcher';

import { colors } from '~/constants/colors.contants';

const barData = [
  { value: 250, label: 'M' },
  { value: 500, label: 'T', frontColor: '#177AD5' },
  { value: 745, label: 'W', frontColor: '#177AD5' },
  { value: 320, label: 'T' },
  { value: 600, label: 'F', frontColor: '#177AD5' },
  { value: 256, label: 'S' },
  { value: 300, label: 'S' },
];

const HabitStatistics = () => {
  return (
    <YStack bg="#f0f0f0" padding={20}>
      <XStack justifyContent="space-between" alignItems="center">
        <H6>Statistic</H6>
        <HabitStatisticsSwitcher />
      </XStack>
      <Separator borderColor={colors.secondaryAccent} marginVertical={15} />
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
  );
};

export default HabitStatistics;
