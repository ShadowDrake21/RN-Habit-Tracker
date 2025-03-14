import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import {
  Input,
  Label,
  XStack,
  YStack,
  Select,
  SelectProps,
  Adapt,
  Sheet,
  getFontSize,
  FontSizeTokens,
  RadioGroup,
  SizeTokens,
  Slider,
  SliderProps,
  TextArea,
  ScrollView,
  Button,
} from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

import HabitReminderTimePicker from '~/components/habit/reminder/HabitReminderTimePicker';
import { SwitchWithLabel } from '~/components/shared/SwitchWithLabel';
import { colors } from '~/constants/colors.contants';

type DurationType = '30 days' | '90 days' | '180 days' | '7 days' | 'Indefinitely';

const Page = () => {
  const [newHabit, setNewHabit] = useState<
    | {
        name: string;
        category: string;
        freequency: string;
        duration: DurationType;
        time: Date | null;
        reminderEnabled: boolean;
        snooze: boolean;
        goal: string;
        startDate: Date | null;
        colorTheme: string;
        emoji: string;
      }
    | undefined
  >(undefined);
  return (
    <ScrollView padding={20}>
      <Input size="$4" borderWidth={2} placeholder="Read 30 minutes" width="100%" />
      <XStack ai="center" gap="$4">
        <Label htmlFor="select-demo-2" f={1} miw={80}>
          Native
        </Label>
        <SelectDemoItem id="select-demo-2" native />
      </XStack>
      <RadioGroup aria-labelledby="Select one item" defaultValue="3" name="form">
        <YStack width={300} alignItems="center" space="$2">
          <RadioGroupItemWithLabel size="$3" value="2" label="Daily" />
          <RadioGroupItemWithLabel size="$4" value="3" label="Twice a week" />
          <RadioGroupItemWithLabel size="$5" value="4" label="Three times a week" />
          <Input
            size="$4"
            borderWidth={2}
            placeholder="X times per week"
            width="100%"
            keyboardType="number-pad"
          />
        </YStack>
      </RadioGroup>
      <HabitReminderTimePicker />
      {/* <SimpleSlider width="100%" /> */}
      <RadioGroup aria-labelledby="Select one item" defaultValue="3" name="form">
        <YStack width={300} alignItems="center" space="$2">
          <RadioGroupItemWithLabel size="$4" value="0" label="Indefinitely" />
          <RadioGroupItemWithLabel size="$4" value="7" label="7 days" />
          <RadioGroupItemWithLabel size="$4" value="30" label="30 days" />
          <RadioGroupItemWithLabel size="$4" value="90" label="90 days" />
          <RadioGroupItemWithLabel size="$4" value="180" label="180 days" />
        </YStack>
      </RadioGroup>
      <SwitchWithLabel size="$3" defaultChecked title="Reminder Toggle" />
      <SwitchWithLabel size="$3" defaultChecked title="Snooze" />
      <TextArea placeholder="Complete 20 times this month" />
      <Calendar current={new Date().toISOString()} />
      <XStack>
        <Button backgroundColor={colors.cancelButton}>Cancel</Button>
        <Button backgroundColor={colors.primaryButton}>Save</Button>
      </XStack>
    </ScrollView>
  );
};
export function SelectDemoItem(props: SelectProps) {
  const [val, setVal] = React.useState('apple');

  return (
    <Select value={val} onValueChange={setVal} disablePreventBodyScroll {...props}>
      <Select.Trigger width={220} iconAfter={ChevronDown}>
        <Select.Value placeholder="Something" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet native={!!props.native} modal dismissOnSnapToBottom animation="lazy">
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            backgroundColor="$shadowColor"
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3">
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', 'transparent']}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}>
          <Select.Group>
            <Select.Label>Category</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {React.useMemo(
              () =>
                categories.map((item, i) => {
                  return (
                    <Select.Item index={i} key={item} value={item.toLowerCase()}>
                      <Select.ItemText>{item}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  );
                }),
              [categories]
            )}
          </Select.Group>
          {/* Native gets an extra icon */}
          {props.native && (
            <YStack
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              alignItems="center"
              justifyContent="center"
              width="$4"
              pointerEvents="none">
              <ChevronDown size={getFontSize((props.size as FontSizeTokens) ?? '$true')} />
            </YStack>
          )}
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3">
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['transparent', '$background']}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}

function SimpleSlider({ children, ...props }: SliderProps) {
  return (
    <Slider defaultValue={[50]} max={100} step={1} {...props}>
      <Slider.Track>
        <Slider.TrackActive />
      </Slider.Track>
      <Slider.Thumb size="$2" index={0} circular />
      {children}
    </Slider>
  );
}

export function RadioGroupItemWithLabel(props: { size: SizeTokens; value: string; label: string }) {
  const id = `radiogroup-${props.value}`;
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={props.value} id={id} size={props.size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={props.size} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  );
}

const categories = [
  'Health',
  'Fitness',
  'Learning',
  'Productivity',
  'Creativity',
  'Mindfulness',
  'Finance',
  'Self-Care',
  'Relationships',
  'Work',
  'Study',
  'Hobby',
  'Skill Development',
  'Reading',
  'Writing',
  'Meditation',
  'Diet',
  'Hydration',
  'Sleep',
  'Social',
  'Language Learning',
  'Career Growth',
  'Personal Growth',
  'Organization',
  'Minimalism',
  'Volunteer',
  'Spirituality',
  'Music',
  'Art',
  'Gaming',
];

export default Page;

const styles = StyleSheet.create({});
