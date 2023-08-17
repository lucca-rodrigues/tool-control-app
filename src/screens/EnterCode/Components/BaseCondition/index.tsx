import { HStack, Select, Text, useTheme } from "native-base";

export function BaseCondition() {
  const { colors } = useTheme();

  return (
    <HStack alignItems="center" py={3} space={2}>
      <Text flex={1} fontWeight={700} fontSize={13} color={colors.black}>
        Condição Base do Equipamento:
      </Text>
      <Select
        minWidth="200px"
        height={9}
        accessibilityLabel="Selecione um fornecedor"
        placeholder="Selecione"
        _selectedItem={{
          bg: "teal.600",
        }}
      >
        <Select.Item label="Local não coberto- Ao tempo" value="value1" />
        <Select.Item label="Local coberto ao tempo" value="value2" />
      </Select>
    </HStack>
  );
}
