import { useState } from "react";
import {
  Text,
  useTheme,
  Input,
  IInputProps,
  Icon,
  Pressable,
  Stack,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

interface IInputPassword extends IInputProps {
  label?: string;
  errorMessage?: string | null | false;
}
export const InputPassword = ({
  label,
  errorMessage,
  ...rest
}: IInputPassword) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const elementLabel = label ? (
    <Text fontWeight={700} fontSize={20} color={colors.primary[50]}>
      {label}
    </Text>
  ) : null;

  return (
    <Stack flex={1}>
      {elementLabel}
      <Input
        isFullWidth
        h={10}
        maxWidth={Dimensions.get("window").width}
        borderRadius={10}
        backgroundColor={colors.primary[100]}
        color={colors.primary[50]}
        fontWeight={700}
        fontSize={16}
        _focus={{
          color: colors.primary[50],
          borderColor: colors.primary[50],
          borderWidth: 2,
        }}
        type={showPassword ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Icon
              as={
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        {...rest}
      />
      {errorMessage && (
        <FormControl isInvalid maxWidth={Dimensions.get("window").width}>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            <Text>{errorMessage}</Text>
          </FormControl.ErrorMessage>
        </FormControl>
      )}
    </Stack>
  );
};
