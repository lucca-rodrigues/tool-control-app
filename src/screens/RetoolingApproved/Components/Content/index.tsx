import {
  Divider,
  InputDate,
  Select,
  Button,
  BottomNavigation,
  CircleStatus,
  Pagination,
} from "../../../../components";
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

import { platformWidth, platformWidthContent } from "../../../../utils";

export const Content = () => {
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
      status: "Aprovado",
    },
    {
      caf: "701801000665",
      description: "DISPOSITIVO DE CONTROLE ISOLAM. INNER DASH P.521",
      status: "Aprovado",
    },
    {
      caf: "701801000651",
      description: "MOLDE DE INJEÇÃO PU ANT.  DO CARPETE P.521",
      status: "Aprovado",
    },
  ];

  return (
    <>
      <VStack flex={1} _web={{ px: 20, maxW: 1200 }} bg="#fff">
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          justifyContent="space-between"
          px={3}
          py={5}
        >
          <Text>24/04/2022 Retooling Aprovado</Text>
          <Text>Id: 75</Text>
        </Stack>
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          bg={colors.primary[50]}
          px={3}
          py={2}
        >
          <Box minWidth={20} _web={{ w: 200 }}>
            <Text color={colors.white}>CAF</Text>
          </Box>
          <Box minWidth={230} _web={{ w: 750 }}>
            <Text color={colors.white}>Descrição</Text>
          </Box>
          <Box minWidth={30} _web={{ w: 20 }}>
            <Text color={colors.white}>Status</Text>
          </Box>
        </Stack>
        <FlatList
          nestedScrollEnabled
          data={retoolingList}
          contentContainerStyle={{
            marginBottom: 100,
          }}
          renderItem={({ item, index }) => {
            return (
              <Box px={4} py={1} _web={{ px: 1 }}>
                <VStack direction="row" space={2}>
                  <Box minWidth={20} _web={{ w: 210 }}>
                    <Text>{item?.caf}</Text>
                  </Box>
                  <Box w={220} _web={{ w: 756 }}>
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
            );
          }}
        />
      </VStack>
      <Pagination
        currentPage={1}
        limit={2}
        handleNextPage={() => {}}
        handlePrevPage={() => {}}
        handleChangeOffset={() => console.log("selected page")}
      />
    </>
  );
};
