import { SizeTokens, Switch, XStack } from 'tamagui';

import { colors } from '~/constants/colors.contants';

export const SwitchWithLabel = (props: { size: SizeTokens; defaultChecked?: boolean }) => {
  const id = `switch-${props.size.toString().slice(1)}-${props.defaultChecked ?? ''}}`;
  return (
    <XStack alignItems="center" gap="$4">
      <Switch
        id={id}
        size={props.size}
        defaultChecked={props.defaultChecked}
        backgroundColor={colors.secondaryAccent}>
        <Switch.Thumb animation="bouncy" backgroundColor={colors.primaryButton} />
      </Switch>
    </XStack>
  );
};
