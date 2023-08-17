import { TextInput } from "../../../../components";
import { HStack, Text, useTheme } from "native-base";

export function InventoryNumber() {
  const { colors } = useTheme();

  return (
    <HStack alignItems="center" py={3} space={2}>
      <Text fontWeight={700} fontSize={13} color={colors.black}>
        Nº Inventário / Imo / “incolor”
      </Text>
      <TextInput fontSize={13} />
    </HStack>
  );
}
