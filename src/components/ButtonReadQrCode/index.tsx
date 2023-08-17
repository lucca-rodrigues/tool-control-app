import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "../Button";
import { HStack } from "native-base";

interface IButtonReadQrCode {
  setOpenScanner: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<string>>;
}

export function ButtonReadQrCode({
  setValue,
  setOpenScanner,
}: IButtonReadQrCode) {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleCloseScanner = () => {
    setScanned(false);
    setOpenScanner(false);
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setValue(data);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão de câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />

      <HStack
        position={"absolute"}
        bottom={8}
        width="100%"
        justifyContent="center"
      >
        <Button
          py={1.5}
          px={5}
          maxWidth={200}
          minWidth={200}
          label={"Fechar"}
          onPress={() => handleCloseScanner()}
        />
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  scanner: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    ...StyleSheet.absoluteFillObject,
  },
});
