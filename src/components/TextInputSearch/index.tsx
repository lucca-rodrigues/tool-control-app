import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Input, IInputProps, Stack, useTheme } from "native-base";
import { Dimensions } from "react-native";

export function TextInputSearch(props: IInputProps) {
  const { colors } = useTheme();
  return (
    <Stack flex={1}>
      <Input
        isFullWidth
        maxWidth={Dimensions.get("window").width}
        h={38}
        borderRadius={10}
        backgroundColor={colors.primary[100]}
        color={colors.primary[50]}
        fontWeight={700}
        fontSize={14}
        textTransform="uppercase"
        _focus={{
          color: colors.primary[50],
          borderColor: colors.primary[50],
          borderWidth: 2,
        }}
        InputRightElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={6}
            mr="2"
            color="black.400"
          />
        }
        {...props}
      />
    </Stack>
  );
}
