import {
  Divider,
  InputDate,
  Select,
  Button,
  BottomNavigation,
  CircleStatus,
} from "../../components";

import {
  View,
  Text,
  VStack,
  Stack,
  Box,
  useTheme,
  FlatList,
  Icon,
  Center,
} from "native-base";

import { platformWidth } from "../../utils";

export const RetoolingInProgressScreen = () => {
  const { colors } = useTheme();

  const retoolingList = [
    {
      caf: "701801000651",
      description: "MOLDE DE INJEÇÃO PU ANT. DO CARPETE P.521",
      status: "Aprovado",
    },
    {
      caf: "701801000652",
      description: "DISPOSITIVO DE SOLDA DIELÉTRICA DO CARPETE P.521",
      status: "Aprovado",
    },
    {
      caf: "701801000659",
      description: "DISPOSITIVO DE CONTROLE TPO  DO PORTA MALAS P.521",
      status: "Aprovado",
    },
    {
      caf: "701801000660",
      description: "DISPOSITIVO DE MONTAGEM TPO  DO PORTA MALAS P.521",
      status: "Reprovado",
    },
    {
      caf: "701801000665",
      description: "DISPOSITIVO DE CONTROLE ISOLAM. INNER DASH P.521",
      status: "Aprovado",
    },
    {
      caf: "701801000651",
      description: "MOLDE DE INJEÇÃO PU ANT.  DO CARPETE P.521",
      status: "Reprovado",
    },
  ];

  return (
    <>
      <VStack flex={1} bg="#fff">
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          justifyContent="space-between"
          px={3}
          py={5}
        >
          <Text>01/03/2022 Retooling Em Andamento</Text>
          <Text>Id: 6</Text>
        </Stack>
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          bg={colors.primary[50]}
          px={3}
          py={2}
        >
          <Box minWidth={20}>
            <Text color={colors.white}>CAF</Text>
          </Box>
          <Box minWidth={230}>
            <Text color={colors.white}>Descrição</Text>
          </Box>
          <Box minWidth={30}>
            <Text color={colors.white}>Status</Text>
          </Box>
        </Stack>
        <FlatList
          nestedScrollEnabled
          data={retoolingList}
          contentContainerStyle={{
            marginBottom: 100,
          }}
          renderItem={({ item, index }) => (
            <Box px={4} py={1}>
              <VStack direction="row" space={2}>
                <Box minWidth={20}>
                  <Text>{item?.caf}</Text>
                </Box>
                <Box w={220}>
                  <Text>{item?.description}</Text>
                </Box>
                <CircleStatus
                  color={
                    item?.status.includes("Aprovado")
                      ? colors.success[100]
                      : colors.warning[50]
                  }
                />
              </VStack>
              <Box mt={3}>
                <Divider />
              </Box>
            </Box>
          )}
        />

        <View maxWidth={platformWidth}>
          <Stack
            direction="row"
            space={2}
            alignItems="center"
            justifyContent="space-between"
            px={3}
            py={5}
          >
            <Button label="VER SOLICITAÇÃO" w="49%" onPress={() => {}} />
            <Button label="SOLICITAR" w="49%" onPress={() => {}} />
          </Stack>
        </View>
      </VStack>
      <BottomNavigation />
    </>
  );
};
