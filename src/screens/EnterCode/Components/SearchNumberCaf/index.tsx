import { Button, TextInputSearch } from "../../../../components";
import { HStack, IconButton, Stack, Text, useTheme } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

interface ISearchNumberCaf {
  handleOpenScannerQrCode: () => void;
}

export function SearchNumberCaf({ handleOpenScannerQrCode }: ISearchNumberCaf) {
  const { colors } = useTheme();

  return (
    <>
      <HStack alignItems="center" space={4}>
        <Stack space={1} flex={1} h={"110px"} maxW={"70%"}>
          <Text fontWeight={700} fontSize={13} color={colors.black}>
            Número do CAF
          </Text>
          <TextInputSearch placeholder="ex: 13211231" />
          <Button py={1.5} px={5} onPress={() => {}} label="Pesquisar" />
        </Stack>
        <IconButton
          maxW={80}
          maxH={80}
          mt={"auto"}
          backgroundColor="primary.600"
          _hover={{ backgroundColor: "primary.700" }}
          onPress={() => handleOpenScannerQrCode()}
          icon={<MaterialIcons name="photo-camera" size={60} color="white" />}
        />
      </HStack>

      <Stack alignItems="center" my={2} space={1}>
        <Text fontSize={13} color={colors.black}>
          701205001091
        </Text>

        <Text fontSize={13} color={colors.black}>
          CAF-701205001091-CARFIT CMX FMB
        </Text>
      </Stack>
    </>
  );
}
