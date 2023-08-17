import {
  Text,
  VStack,
  Stack,
  Box,
  useTheme,
  Center,
  FlatList,
  Checkbox,
  View,
} from "native-base";
import {
  Divider,
  Button,
  TextInputSearch,
  Pagination,
} from "../../../../components";
import { FontAwesome } from "@expo/vector-icons";
import { useFormContext, useNavigatorContext } from "../../../../contexts";
import searchRetoolingOptions from "../../hook/searchRetoolingOptions";
import { useEffect } from "react";
import { platformWeb } from "../../../../utils";

export const Content = () => {
  const { colors } = useTheme();
  const { navigateTo } = useNavigatorContext();
  const { setValue } = useFormContext();
  const { setResponseData, retoolingItems, handleFilterData, responseData } =
    searchRetoolingOptions();

  useEffect(() => {
    setResponseData(retoolingItems);
  }, []);

  function handleRedirectPage(index: string) {
    console.log("page: ", index);
  }

  return (
    <>
      <View flex={1} _web={{ px: 10, w: "100%", mt: 50 }} bg="#fff">
        <Stack direction="row" px={3} mb="2.5" mt="1.5" space={3}>
          <TextInputSearch
            placeholder="OPERACAO 50 CALIBRAR E FLANGEA"
            size="sm"
            onChangeText={(value: string) =>
              setValue("searchRetoolingOptions", value)
            }
          />
          <Button onPress={() => console.log("")} label="PESQUISAR" />
        </Stack>
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          bg={colors.primary[50]}
          px={3}
          py={2}
          _web={{ mt: 50 }}
        >
          <Box minWidth={100} _web={{ w: "10%" }}>
            <Text color={colors.white}>CAF</Text>
          </Box>
          <Box minWidth={150} _web={{ w: "80%" }}>
            <Text color={colors.white}>Descrição</Text>
          </Box>
          <Box minWidth={10}>
            <Text color={colors.white}>Selecionar</Text>
          </Box>
        </Stack>
        <FlatList
          nestedScrollEnabled
          data={responseData}
          contentContainerStyle={{
            marginBottom: !platformWeb ? 100 : 10,
          }}
          renderItem={({ item, index }) => {
            return (
              <Box px={4} py={2} _web={{ px: 1 }}>
                <VStack direction="row" space={2}>
                  <Box _web={{ w: "11%" }}>
                    <Text>{item?.CAF}</Text>
                  </Box>
                  <Box w={200} _web={{ w: "80%" }}>
                    <Text>{item?.description}</Text>
                  </Box>
                  <Center>
                    <Box _web={{ w: "2%" }}>
                      <Checkbox value={""} />
                    </Box>
                  </Center>
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
          limit={1}
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
            px={2}
            py={3}
            _web={{ justifyContent: "space-between" }}
          >
            <Button
              w="48%"
              _web={{ w: "48%" }}
              label="VER SOLICITAÇÃO"
              onPress={() => {}}
            />
            <Button
              w="48%"
              _web={{ w: "48%" }}
              label="INCLUIR ITENS"
              onPress={() => navigateTo("RetoolingItemsReviewScreen")}
            />
          </Stack>
        </Box>
      </View>
    </>
  );
};
