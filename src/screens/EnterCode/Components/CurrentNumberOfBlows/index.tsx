import { TextInput } from "../../../../components";
import { HStack, Text, useTheme } from "native-base";

export function CurrentNumberOfBlows() {
  const { colors } = useTheme();

  return (
    <HStack alignItems="center" py={3} space={2}>
      <Text fontWeight={700} fontSize={13} color={colors.black}>
        Número de Golpes Atual
      </Text>
      <TextInput placeholder="Tooling Tracking" fontSize={13} />
    </HStack>
  );
}
