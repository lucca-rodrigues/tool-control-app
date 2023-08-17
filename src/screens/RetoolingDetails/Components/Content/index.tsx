import {
  Divider,
  WebSidebarMenu,
  Button,
  BottomNavigation,
  Select,
  InputDate,
} from "../../../../components";
import {
  View,
  Text,
  VStack,
  Stack,
  Center,
  Box,
  Icon,
  FlatList,
  useTheme,
  Checkbox,
  HStack,
  Radio,
  ScrollView,
} from "native-base";
import { createIconSetFromFontello, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "../../../../components/TextInput/index";
import { platformWeb } from "../../../../utils";

export const Content = () => {
  const { colors } = useTheme();

  const detailslist = [
    {
      title: "Cost Breakdown Tooling [Excel]",
    },
    {
      title: "Form. de Revitalização e Construção [PDF]",
    },
    {
      title: "Apresent. de Retooling [PPT]",
    },
  ];
  return (
    <>
      <VStack flex={1} px={2} py={2} _web={{ px: 20, maxW: 1200 }} bg="#fff">
        <Stack>
          <Center pb={2} _web={{ pb: 5 }}>
            <Text>701801001023</Text>
            <Text>OPERACAO 50 CALIBRAR </Text>
            <Text> E FLANGEAR 52027507</Text>
          </Center>
          <Divider />
        </Stack>
        <ScrollView>
          <HStack space={2} py={3}>
            <Radio.Group name="exampleGroup" defaultValue="1">
              <HStack alignItems="center" justifyContent="space-between">
                <Box w="60%">
                  <Radio value="1" size="sm">
                    Construção
                  </Radio>
                </Box>
                <Box w="40%">
                  <Radio value="2" size="sm">
                    Revitalização
                  </Radio>
                </Box>
              </HStack>
            </Radio.Group>
          </HStack>
          <Divider />
          <Stack direction="row" justifyContent="space-between" p={2} space={1}>
            <Box w="39%">
              <Text>Nº Componente / Conjunto (PN)</Text>
            </Box>
            <Box w="30%">
              <TextInput />
            </Box>
            <Box w="30%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Aplicação(Modelo / Projeto)</Text>
            </Box>
            <Box w="60%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Metálico / Plástico</Text>
            </Box>
            <Box w="60%" _web={{ minW: 500 }}>
              <Select
                placeholder="Selecione"
                label="label"
                options={[
                  {
                    label: "Metálico",
                    value: "metalico",
                  },
                  {
                    label: "Plástico",
                    value: "plastico",
                  },
                ]}
              />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Operação</Text>
            </Box>
            <Box w="60%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Nº Cavidades</Text>
            </Box>
            <Box w="60%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Denominação</Text>
            </Box>
            <Box w="60%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Pedido de Compra Atual</Text>
            </Box>
            <Box w="60%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="39%">
              <Text>Data Início Produção</Text>
            </Box>
            <Box w="59%">
              <InputDate placeholder="DD/MM/AA" width={172} />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Nº Ciclos Realizados</Text>
            </Box>
            <Box w="60%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Nº Ciclos Contratados</Text>
            </Box>
            <Box w="60%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" justifyContent="space-between" p={2}>
            <Box w="40%">
              <Text>Justificativa</Text>
            </Box>
            <Box w="60%">
              <TextInput />
            </Box>
          </Stack>
          <Divider />
          <Stack
            _web={{ px: 10 }}
            direction="row"
            space={3}
            justifyContent="space-between"
            px={2}
            py={3}
          >
            <Text>Anexos</Text>
            <Icon
              as={FontAwesome}
              name="pencil-square-o"
              size={8}
              color={colors.success[50]}
            />
          </Stack>
          <FlatList
            nestedScrollEnabled
            data={detailslist}
            contentContainerStyle={{
              marginTop: 10,
              marginBottom: !platformWeb ? 205 : 10,
            }}
            renderItem={({ item, index }) => {
              return (
                <Box px={2} py={2} _web={{ px: 10 }}>
                  <VStack
                    direction="row"
                    space={2}
                    justifyContent="space-between"
                  >
                    <Stack direction="row" space={2}>
                      <Text>{`${index + 1})`}</Text>
                      <Text>{item?.title}</Text>
                    </Stack>
                    <Box>
                      <Checkbox value={""} />
                    </Box>
                  </VStack>
                </Box>
              );
            }}
          />
        </ScrollView>

        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          space={2}
          py={2}
          _web={{ justifyContent: "space-between" }}
        >
          <Button
            _web={{ w: 500 }}
            w="48%"
            label="CANCELAR"
            onPress={() => console.log()}
          />
          <Button
            _web={{ w: 500 }}
            w="48%"
            label="GRAVAR"
            onPress={() => console.log()}
          />
        </Stack>
      </VStack>
    </>
  );
};
