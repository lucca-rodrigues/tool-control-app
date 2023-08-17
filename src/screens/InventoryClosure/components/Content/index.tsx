import {
  Divider,
  Button,
  BottomNavigation,
  PieChart,
} from "../../../../components";
import { View, Text, VStack, Stack, Box, useTheme, Center } from "native-base";

import { platformAndroid } from "../../../../utils";

import { useState } from "react";
import modalActions from "../../hooks/modalActions";
import { SafeAreaView } from "react-native";
import { ModalConfirmation } from "../ModalConfirmation";

export const Content = () => {
  const { colors } = useTheme();
  const { handleOpenModal } = modalActions();

  const chartData = [
    {
      name: "Inventario Realizado",
      quantity: 60,
      color: "#4F81BD",
      legendColor: "#7F7F7F",
    },
    {
      name: "Ferramenta sem CAF",
      quantity: 5,
      color: "#C0504D",
    },
    {
      name: "CAF Não Localizado",
      quantity: 15,
      color: "#8064A2",
    },
    {
      name: "CAF Divergente ou Duplicado",
      quantity: 20,
      color: "#9BBB59",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} px={2} _web={{ px: 10 }}>
        <Stack
          direction="row"
          space={2}
          alignItems="center"
          justifyContent="space-between"
          px={3}
          py={5}
        >
          <Text>Fornecedor: ADLER</Text>
          <Text>Grupo: Médios</Text>
        </Stack>
        <Divider />

        <Stack
          direction="row"
          space={2}
          alignItems="center"
          justifyContent="space-between"
          px={3}
          py={5}
        >
          <Box w="45%">
            <Text textAlign="right" mb={5}>
              Início: 01/08/2022{" "}
            </Text>
            <Text textAlign="right">Fim: 31/01/2022</Text>
          </Box>
          <Box w="45%">
            <Text textAlign="left">Inventário Id: 31416</Text>
          </Box>
        </Stack>

        <PieChart
          data={chartData}
          accessor="quantity"
          border
          title="Ferramentas Inventariadas"
          w={platformAndroid ? 240 : 180}
          h={platformAndroid ? 140 : 120}
        />

        <Center>
          <Box w="90%" mt={10}>
            <Stack direction="row" alignItems="flex-end" space={2}>
              <Box w={230}>
                <Text textAlign="right">Inventário Realizado com Sucesso:</Text>
              </Box>
              <Box w={10}>
                <Text textAlign="right">820</Text>
              </Box>
              <Box w={10}>
                <Text textAlign="right">95%</Text>
              </Box>
            </Stack>

            <Stack direction="row" alignItems="flex-end" space={2}>
              <Box w={230}>
                <Text textAlign="right">Problemas Documentados: </Text>
              </Box>
              <Box w={10}>
                <Text textAlign="right">25</Text>
              </Box>
              <Box w={10}>
                <Text textAlign="right">5%</Text>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="flex-end" space={2}>
              <Box w={230}>
                <Text textAlign="right">Total de Ferramentas: </Text>
              </Box>
              <Box w={10}>
                <Text textAlign="right">845</Text>
              </Box>
              <Box w={10}>
                <Text textAlign="right">100%</Text>
              </Box>
            </Stack>
            <Center py={2}>
              <Text>Usuário: Andreza C. P. da S. NASCIMENTO</Text>
            </Center>
          </Box>
          <ModalConfirmation />
        </Center>

        <View px={2} py={1} _web={{ alignItems: "center", mt: 20 }}>
          <Button
            label="CONFIRMAR ENCERRAMENTO INVENTÁRIO"
            onPress={handleOpenModal}
            _web={{ w: "50%" }}
          />
        </View>
      </VStack>
    </SafeAreaView>
  );
};
