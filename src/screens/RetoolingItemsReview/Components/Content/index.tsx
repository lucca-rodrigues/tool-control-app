import {
  Text,
  VStack,
  Stack,
  Box,
  Input,
  useTheme,
  FlatList,
  View,
} from "native-base";
import { Divider, Button, Pagination } from "../../../../components";
import { useNavigatorContext } from "../../../../contexts";

export const Content = () => {
  const { colors } = useTheme();
  const { navigateTo } = useNavigatorContext();

  function handleRedirectPage(index: string) {
    console.log("page: ", index);
  }

  const retoolingItems = [
    {
      CAF: 701801000651,
      description: "MOLDE DE INJEÇÃO PU ANT. DO CARPETE P.521",
    },
    {
      CAF: 701801000652,
      description: "DISPOSITIVO DE SOLDA DIELÉTRICA DO CARPETE P.521",
    },
    {
      CAF: 701801000659,
      description: "DISPOSITIVO DE CONTROLE TPO  DO PORTA MALAS P.521",
    },
    {
      CAF: 701801000660,
      description: "DISPOSITIVO DE MONTAGEM TPO  DO PORTA MALAS P.521",
    },
    {
      CAF: 701801000665,
      description: "DISPOSITIVO DE CONTROLE ISOLAM. INNER DASH P.521",
    },
    {
      CAF: 701801000651,
      description: "MOLDE DE INJEÇÃO PU ANT. DO CARPETE P.521",
    },
    {
      CAF: 701801000652,
      description: "DISPOSITIVO DE SOLDA DIELÉTRICA DO CARPETE P.521",
    },
  ];

  return (
    <>
      <View flex={1} _web={{ px: 10, w: "100%" }} bg="#fff">
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          justifyContent="space-between"
          px={5}
          py={5}
          _web={{ space: 1, px: 1 }}
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
          <Box minWidth={100} _web={{ w: "10%" }}>
            <Text color={colors.white}>CAF</Text>
          </Box>
          <Box minWidth={150} _web={{ w: "80%" }}>
            <Text color={colors.white}>Descrição</Text>
          </Box>
        </Stack>
        <FlatList
          nestedScrollEnabled
          data={retoolingItems}
          contentContainerStyle={{
            marginBottom: 100,
          }}
          renderItem={({ item, index }) => {
            return (
              <Box px={4} py={2} _web={{ px: 1 }}>
                <VStack direction="row" space={2}>
                  <Box _web={{ w: "10%" }}>
                    <Text>{item?.CAF}</Text>
                  </Box>
                  <Box w={225} _web={{ w: "70%" }}>
                    <Text>{item?.description}</Text>
                  </Box>
                </VStack>
                <Box mt={3}>
                  <Divider />
                </Box>
              </Box>
            );
          }}
        />
        <Pagination
          currentPage={1}
          limit={2}
          handleNextPage={() => {}}
          handlePrevPage={() => {}}
          handleChangeOffset={() => {}}
        />

        <Box>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            space={2}
            px={1}
            py={3}
            _web={{ justifyContent: "space-between" }}
          >
            <Button
              w="48%"
              _web={{ w: "48%" }}
              label="INCLUIR ITENS"
              onPress={() => navigateTo("RetoolingItemsScreen")}
            />
            <Button
              w="48%"
              _web={{ w: "48%" }}
              label="FINALIZAR"
              onPress={() => navigateTo("RetoolingScreen")}
            />
          </Stack>
        </Box>
      </View>
    </>
  );
};
