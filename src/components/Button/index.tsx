import { Button as NativeButton, IButtonProps, Text } from "native-base";

interface IButton extends IButtonProps {
  label?: string;
  onPress: () => void;
  colorText?: string;
}
export const Button = ({
  label,
  onPress,
  colorText = "#fff",
  ...rest
}: IButton) => {
  return (
    <NativeButton borderRadius={8} onPress={onPress} {...rest}>
      <Text color={colorText} fontWeight={500} textTransform="uppercase">
        {label}
      </Text>
    </NativeButton>
  );
};
