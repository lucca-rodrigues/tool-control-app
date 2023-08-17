import {
  SelectProvider,
  MiniPieChart,
  Divider,
  CircleStatus,
} from "../../../../components";
import { Box, Center, Stack, Text, useTheme, VStack } from "native-base";
import homeScreenHooks from "../../hooks/homeScreen";
import { formatDate, platformWeb } from "../../../../utils";

export const CurrentProvider = () => {
  const { colors } = useTheme();
  const { filteredProvider, inventoryData, chartData, statusInventory } =
    homeScreenHooks();

  return (
    <VStack
      px={4}
      bg="#fff"
      _web={{
        display: "flex",
        bg: colors.primary[100],
        w: "60%",
        px: 10,
        py: 50,
        borderRadius: 10,
      }}
    >
      <Stack direction="row" pb={2} space={3} alignItems="center">
        <Box>
          <Text>Fornecedor:</Text>
        </Box>
        <Box maxW="150">
          <SelectProvider />
        </Box>
        <Box>
          <Text> Grupo: {filteredProvider?.group}</Text>
        </Box>
      </Stack>
      <Center>
        <Text>Inventário Atual</Text>
      </Center>
      {inventoryData?.status && (
        <>
          <Box pt={3}>
            <Text>
              Início: {formatDate(inventoryData?.start)} - Fim:
              {formatDate(inventoryData?.end)}
            </Text>
          </Box>
          <Stack direction="row" pt={1} space={3} alignItems="center">
            <Stack direction="row" space={2} alignItems="center">
              <Text>Situação: {inventoryData?.status}</Text>
              <CircleStatus
                color={
                  inventoryData?.status !== "Em andamento"
                    ? colors.success[100]
                    : colors.warning[50]
                }
              />

              <Stack direction="row" space={2} alignItems="center" ml={1}>
                <Text>
                  {inventoryData?.completedItens} de {inventoryData?.totalItens}
                  {` - ${statusInventory}`}
                </Text>

                {!platformWeb && (
                  <MiniPieChart data={chartData} width={100} height={60} />
                )}
              </Stack>
            </Stack>
          </Stack>
        </>
      )}

      <Box pb={2}>
        <Divider />
      </Box>
    </VStack>
  );
};
