import { Label, Separator, SizeTokens, Switch, XStack } from 'tamagui';

import { colors } from '~/constants/colors.contants';

export const SwitchWithLabel = (props: {
  size: SizeTokens;
  title?: string;
  defaultChecked?: boolean;
}) => {
  const { size, title, defaultChecked } = props;
  const id = `switch-${props.size.toString().slice(1)}-${props.defaultChecked ?? ''}}`;
  return (
    <XStack alignItems="center" gap="$4">
      {title && (
        <Label paddingRight="$0" minWidth={90} justifyContent="flex-end" size={size} htmlFor={id}>
          {title}
        </Label>
      )}
      <Separator minHeight={20} vertical />
      <Switch
        id={id}
        size={size}
        defaultChecked={defaultChecked}
        backgroundColor={colors.secondaryAccent}>
        <Switch.Thumb animation="bouncy" backgroundColor={colors.primaryButton} />
      </Switch>
    </XStack>
  );
};
