import { CircleStatus, Divider, MiniPieChart } from "../index";
import { Box, Stack, Text, useTheme, View } from "native-base";
import { useInventoryContext } from "../../contexts";
import homeScreenHooks from "../../screens/Home/hooks/homeScreen";
import { formatDate, platformWeb } from "../../utils";

export const TabsHeader = () => {
  const { colors } = useTheme();
  const { inventoryData } = useInventoryContext();
  const { chartData } = homeScreenHooks();

  const { start, end, status } = inventoryData;

  return (
    <>
      <View px={2} py={1} bg="#fff">
        <Stack direction="row" minH={12}>
          <Stack>
            {start && end && (
              <Box>
                <Text>
                  Início: {formatDate(start)} - Fim: {formatDate(end)}
                </Text>
              </Box>
            )}
            {status && (
              <Stack direction="row" space={2} alignItems="center">
                <Text>Situação: {status}</Text>
                <CircleStatus
                  color={
                    (status && status?.includes("Parado")) ||
                    (status?.includes("Em andamento") && colors.warning[50]) ||
                    colors.success[200]
                  }
                />
                <Text>{status}</Text>
              </Stack>
            )}
          </Stack>
          <Stack>
            {!platformWeb && chartData && (
              <MiniPieChart data={chartData} width={120} height={55} />
            )}
          </Stack>
        </Stack>
      </View>
      <Divider />
    </>
  );
};
