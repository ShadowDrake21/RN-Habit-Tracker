import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import React, { useState } from 'react';
import { StyleSheet, Modal, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { runOnJS } from 'react-native-reanimated';
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from 'reanimated-color-picker';
import EmojiPicker, { type EmojiType } from 'rn-emoji-keyboard';
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
  H6,
  H3,
} from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

import HabitReminderTimePicker from '~/components/habit/reminder/HabitReminderTimePicker';
import { SwitchWithLabel } from '~/components/shared/SwitchWithLabel';
import { colors } from '~/constants/colors.contants';

type DurationType = '30 days' | '90 days' | '180 days' | '7 days' | 'Indefinitely';

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const [newHabit, setNewHabit] = useState<{
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
  }>({
    name: '',
    category: '',
    freequency: '3',
    duration: '30 days',
    time: null,
    reminderEnabled: true,
    snooze: true,
    goal: '',
    startDate: null,
    colorTheme: '#000',
    emoji: '',
  });

  const [emojiOpen, setEmojiOpen] = useState(false);

  // TODO: Fix!
  const onSelectColor = ({ hex }: { hex: string }) => {
    'worklet';
    console.log(hex);

    runOnJS(setNewHabit)((prev) => prev && { ...prev, colorTheme: hex });
  };

  const handlePick = (emojiObject: EmojiType) => {
    setNewHabit((prev) => ({ ...prev, emoji: emojiObject.emoji }));
  };

  return (
    <ScrollView padding={20} gap="$4">
      <YStack gap="$3">
        <H3 textAlign="center" fontWeight={700}>
          Basic Info
        </H3>
        <YStack flex={1} gap="$3">
          <H6 textAlign="center">Name</H6>
          <Input
            size="$4"
            borderWidth={2}
            placeholder="Read 30 minutes"
            width="100%"
            backgroundColor="#fff"
            borderColor="$colorTransparent"
          />
        </YStack>
        <YStack flex={1} gap="$3">
          <H6 textAlign="center">Category</H6>
          <SelectDemoItem id="select-demo-2" native />
        </YStack>
      </YStack>
      <YStack gap="$3">
        <H3 textAlign="center" fontWeight={700}>
          Frequency & Schedule
        </H3>
        <RadioGroup defaultValue="3" name="form">
          <H6 textAlign="center">Repetition</H6>
          <YStack alignItems="center" gap="$2">
            <RadioGroupItemWithLabel size="$3" value="1" label="Daily" />
            <RadioGroupItemWithLabel size="$3" value="2" label="Twice a week" />
            <RadioGroupItemWithLabel size="$3" value="3" label="Three times a week" />
            <Input
              size="$4"
              borderWidth={2}
              placeholder="X times per week"
              width={200}
              keyboardType="number-pad"
              textAlign="center"
            />
          </YStack>
        </RadioGroup>
        <YStack justifyContent="center" gap="$3" alignItems="center">
          <H6 textAlign="center">Time selection</H6>
          <HabitReminderTimePicker />
        </YStack>
        <RadioGroup defaultValue="7" name="form">
          <H6 textAlign="center">Duration</H6>
          <YStack width="100%" alignItems="center" gap="$2">
            <RadioGroupItemWithLabel size="$4" value="0" label="Indefinitely" />
            <RadioGroupItemWithLabel size="$4" value="7" label="7 days" />
            <RadioGroupItemWithLabel size="$4" value="30" label="30 days" />
            <RadioGroupItemWithLabel size="$4" value="90" label="90 days" />
            <RadioGroupItemWithLabel size="$4" value="180" label="180 days" />
            <Input
              size="$4"
              borderWidth={2}
              placeholder="X days"
              textAlign="center"
              width={100}
              keyboardType="number-pad"
            />
          </YStack>
        </RadioGroup>
      </YStack>
      <YStack gap="$3">
        <H3 textAlign="center" fontWeight={700}>
          Notifications & Reminders
        </H3>
        <XStack gap="$3">
          <SwitchWithLabel size="$3" defaultChecked title="Reminder Toggle" />
          <SwitchWithLabel size="$3" defaultChecked title="Snooze" />
        </XStack>
      </YStack>
      <YStack gap="$3">
        <YStack>
          <H6 textAlign="center">Goal Setting</H6>
          <TextArea
            placeholder="Complete 20 times this month"
            backgroundColor="#fff"
            borderColor="$colorTransparent"
          />
        </YStack>

        <YStack>
          <H6 textAlign="center">Start Date</H6>
          <Calendar current={new Date().toISOString()} />
        </YStack>
      </YStack>
      <YStack gap="$3">
        Appearance & Customization
        <Button
          onPress={() => setShowModal(true)}
          borderWidth={1}
          borderColor={newHabit.colorTheme}>
          Color Theme
        </Button>
        <Button onPress={() => setEmojiOpen(true)}>Emoji Picker {newHabit?.emoji}</Button>
        <EmojiPicker
          onEmojiSelected={handlePick}
          open={emojiOpen}
          onClose={() => setEmojiOpen(false)}
        />
      </YStack>
      <Modal visible={showModal} animationType="slide">
        <ColorPicker
          style={{ width: '100%' }}
          value={newHabit.colorTheme}
          onComplete={onSelectColor}>
          <Preview />
          <Panel1 />
          <HueSlider />
          <OpacitySlider />
          <Swatches />
        </ColorPicker>

        <Button onPress={() => setShowModal(false)}>OK</Button>
      </Modal>
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
      <Select.Trigger width="100%" iconAfter={ChevronDown}>
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
    <XStack width={300} alignItems="center" justifyContent="center" gap="$4">
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
