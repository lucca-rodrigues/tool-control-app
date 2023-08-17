import {
  Divider,
  InputDate,
  Select,
  Button,
  BottomNavigation,
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
import { useFormContext, useNavigatorContext } from "../../../../contexts";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { DrawerActions } from "@react-navigation/routers";
import { useNavigation } from "@react-navigation/native";
import { platformWeb } from "../../../../utils";

export const Content = () => {
  const { colors } = useTheme();
  const { watchFields, setValue } = useFormContext();
  const { navigateTo } = useNavigatorContext();
  const navigation = useNavigation();
  const drawerNavigation = navigation.getParent("RetoolingDrawer");

  const { initialDate, finalDate, retoolingStatus } = watchFields;

  const retoolingList = [
    {
      date: "20/06/2022",
      status: "Retooling Solicitado",
      quantity: 9,
      id: 101,
    },
    {
      date: "24/04/2022",
      status: "Retooling Aprovado",
      quantity: 12,
      id: 75,
    },
    {
      date: "01/03/2022",
      status: "Em Andamento",
      quantity: 25,
      id: 6,
    },
    {
      date: "26/01/2022",
      status: "Retooling Parado",
      quantity: 14,
      id: 307,
    },
    {
      date: "23/11/2021",
      status: "Retooling Realizado",
      quantity: 6,
      id: 12,
    },
  ];

  const selectOptions = [
    {
      label: "Todos",
      value: "todos",
    },
    {
      label: "Retooling Solicitado",
      value: "Retooling Solicitado",
    },
    {
      label: "Retooling Aprovado",
      value: "Retooling Aprovado",
    },
    {
      label: "Em Andamento",
      value: "Em Andamento",
    },
    {
      label: "Retooling Parado",
      value: "Retooling Parado",
    },
    {
      label: "Retooling Realizado",
      value: "Retooling Realizado",
    },
  ];

  function handleRedirectPage(status: string) {
    if (status.includes("Solicitado")) {
      return navigateTo("");
    } else if (status.includes("Aprovado")) {
      return navigateTo("RetoolingApprovedScreen");
    } else if (status.includes("Em Andamento")) {
      return navigateTo("RetoolingDetailsScreen");
    } else if (status.includes("Realizado")) {
      return navigateTo("");
    }
  }
  return (
    <>
      <VStack flex={1} _web={{ px: 20, maxW: "100%" }} bg="#fff">
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          px={3}
          _web={{ pt: 20, pb: 5 }}
        >
          <Box>
            <Text>Selecione o Status:</Text>
          </Box>
          <Box>
            <Select
              name="retoolingStatus"
              options={selectOptions}
              defaultValue={selectOptions[0]["value"]}
            />
          </Box>
        </Stack>
        <Stack
          direction="row"
          space={2}
          pt={3}
          alignItems="center"
          px={3}
          _web={{ justifyContent: "space-between" }}
        >
          <Box w={120}>
            <InputDate name="initialDate" placeholder="DD/MM/AA" />
          </Box>
          <Box w={120}>
            <InputDate name="finalDate" placeholder="DD/MM/AA" />
          </Box>
          <Box>
            <Button
              label="Pesquisar"
              onPress={() => console.log("Pesquisar aqui")}
            />
          </Box>
        </Stack>
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          bg={colors.primary[50]}
          mt={10}
          px={3}
          py={2}
          _web={{ w: "100%" }}
        >
          <Box minWidth={20} _web={{ w: 100 }}>
            <Text color={colors.white}>Data</Text>
          </Box>
          <Box minWidth={150} _web={{ w: 640 }}>
            <Text color={colors.white}>Status</Text>
          </Box>
          <Box minWidth={30} _web={{ w: 100 }}>
            <Text color={colors.white}>Qtd</Text>
          </Box>
          <Box minWidth={35} _web={{ w: 100 }}>
            <Text color={colors.white}>Id</Text>
          </Box>
          <Box minWidth={25} _web={{ w: 100 }}>
            <Text color={colors.white}>Ações</Text>
          </Box>
        </Stack>
        <FlatList
          nestedScrollEnabled
          data={retoolingList}
          contentContainerStyle={{
            marginBottom: !platformWeb ? 100 : 10,
          }}
          renderItem={({ item, index }) => {
            return (
              <Pressable onPress={() => handleRedirectPage(item?.status)}>
                <Box px={4} py={2} _web={{ px: 1 }}>
                  <VStack direction="row" space={2}>
                    <Box minWidth={20} _web={{ w: 110 }}>
                      <Text>{item?.date}</Text>
                    </Box>
                    <Box minWidth={150} _web={{ w: 640 }}>
                      <Text>{item?.status}</Text>
                    </Box>
                    <Box minWidth={30} _web={{ w: 90 }}>
                      <Text>{item?.quantity}</Text>
                    </Box>
                    <Box minWidth={45} _web={{ w: 90 }}>
                      <Text>{item?.id}</Text>
                    </Box>
                    <Box minWidth={25} _web={{ w: 90 }}>
                      <Center>
                        <Pressable
                          onPress={() =>
                            drawerNavigation?.dispatch(
                              DrawerActions?.openDrawer()
                            )
                          }
                        >
                          <Icon
                            as={FontAwesome}
                            name="ellipsis-v"
                            color={colors.primary[200]}
                            size={7}
                            alignItems="center"
                          />
                        </Pressable>
                      </Center>
                    </Box>
                  </VStack>
                  <Box mt={3}>
                    <Divider />
                  </Box>
                </Box>
              </Pressable>
            );
          }}
        />

        <Stack px={10} py={5}>
          <Button
            label="SOLICITAR RETOOLING"
            onPress={() => navigateTo("RetoolingItemsScreen")}
          />
        </Stack>
      </VStack>
    </>
  );
};
