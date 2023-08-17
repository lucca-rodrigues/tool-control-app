import { HStack, Radio, Stack, Text, useTheme } from "native-base";

export function LabelAndProduction() {
  const { colors } = useTheme();

  return (
    <Stack py={3} space={2}>
      <HStack alignItems="center" space={2}>
        <Text fontWeight={700} fontSize={13} color={colors.black}>
          Tem Etiqueta?
        </Text>
        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="Tem etiqueta?"
        >
          <HStack ml={4} space={2} alignItems="center">
            <Radio value="1" accessibilityLabel="Sim, tem etiqueta!" size="sm">
              Sim
            </Radio>
            <Radio value="2" accessibilityLabel="Não tem etiqueta!" size="sm">
              Não
            </Radio>
          </HStack>
        </Radio.Group>
      </HStack>

      <HStack alignItems="center" space={2}>
        <Text fontWeight={700} fontSize={13} color={colors.black}>
          Em Produção:
        </Text>
        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="Em produção"
        >
          <HStack ml={4} space={2} alignItems="center">
            <Radio
              value="1"
              accessibilityLabel="Sim, em produção!"
              size="sm"
              ml={"2px"}
            >
              Sim
            </Radio>
            <Radio
              value="2"
              accessibilityLabel="Não está em produção!"
              size="sm"
            >
              Não
            </Radio>
          </HStack>
        </Radio.Group>
      </HStack>
    </Stack>
  );
}
