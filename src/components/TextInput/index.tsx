import { isError } from "lodash";
import {
  Input,
  IInputProps,
  Text,
  View,
  useTheme,
  FormControl,
  WarningOutlineIcon,
  Box,
} from "native-base";
import { Dimensions } from "react-native";

interface IInput extends IInputProps {
  label?: string;
  errorMessage?: string | null | false;
  onChange?: (e: any) => any;
}
export const TextInput = ({
  label,
  errorMessage,
  onChange,
  ...rest
}: IInput) => {
  const { colors } = useTheme();

  const elementLabel = label && (
    <Text fontWeight={700} fontSize={20} color={colors.primary[50]}>
      {label}
    </Text>
  );

  return (
    <View flex={1}>
      {elementLabel}
      <Input
        isFullWidth
        maxWidth={Dimensions.get("window").width}
        h={10}
        borderRadius={10}
        backgroundColor={colors.primary[100]}
        color={colors.primary[50]}
        fontWeight={700}
        fontSize={20}
        _focus={{
          color: colors.primary[50],
          borderColor: colors.primary[50],
          borderWidth: 2,
        }}
        onChange={onChange}
        {...rest}
      />
      {errorMessage && (
        <FormControl isInvalid maxWidth={Dimensions.get("window").width}>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            <Text>{errorMessage}</Text>
          </FormControl.ErrorMessage>
        </FormControl>
      )}
    </View>
  );
};
