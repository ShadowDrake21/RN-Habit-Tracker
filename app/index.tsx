import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, H1, Image, SizableText, YStack } from 'tamagui';

import { colors } from '~/constants/colors.contants';

const Page = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      paddingHorizontal={20}
      gap={20}
      pt={top}
      pb={bottom}>
      <Image
        source={{ uri: require('~/assets/onboarding/image1.png') }}
        style={{ width: width - 20, height: width - 20 }}
        objectFit="contain"
      />
      <YStack justifyContent="space-between" flex={1} width="100%">
        <YStack gap={20}>
          <H1 color={colors.primaryText} fontSize={32} textAlign="center" fontWeight={700}>
            Build Better Habits, One Step at a Time
          </H1>
          <SizableText color={colors.secondaryText} fontSize={18} textAlign="center">
            Track progress, stay motivated, and create lasting routines effortlessly.
          </SizableText>
        </YStack>
        <Button
          size="$6"
          backgroundColor={colors.primaryButton}
          color={colors.primaryButtonText}
          width="100%"
          fontWeight={700}
          onPress={() => router.replace('/(drawer)')}>
          Get Started
        </Button>
      </YStack>
    </YStack>
  );
};

export default Page;

const styles = StyleSheet.create({});
