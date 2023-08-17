import {
  BottomNavigation,
  Divider,
  CameraCustom,
  ButtonReadQrCode,
} from "../../../../components";
import { Center, Stack, Text, View, VStack } from "native-base";

import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { platformIOS } from "../../../../utils/platformTypes";
import { ScrollView } from "react-native-gesture-handler";
import { SearchNumberCaf } from "../SearchNumberCaf";
import { BaseCondition } from "../BaseCondition";
import { InventoryNumber } from "../InventoryNumber";
import { CurrentNumberOfBlows } from "../CurrentNumberOfBlows";
import { LabelAndProduction } from "../LabelAndProduction";
import { Photos } from "../Photos";
import { ActionsButtons } from "../ActionButtons";
import { useEnterCode } from "../../hook/useEnterCode";
import { useState } from "react";
import useQrCode from "../../hook/useQrCode";

export function Content() {
  const {
    openCamera,
    listPhotos,
    __handleSavePhotos,
    __handleOpenCamera,
    __handleCloseCamera,
  } = useEnterCode();

  const {
    handleOpenScannerQrCode,
    openScanner,
    valueQRCode,
    setValueQRCode,
    handleCloseScannerQrCode,
  } = useQrCode();

  console.log("valueQRCode: ", valueQRCode);

  if (openCamera) {
    return (
      <View flex={1} style={styles.camera}>
        <CameraCustom
          handleSavePhotos={__handleSavePhotos}
          handleCloseCamera={__handleCloseCamera}
        />
      </View>
    );
  }

  if (openScanner)
    return (
      <ButtonReadQrCode
        setValue={setValueQRCode}
        setOpenScanner={handleCloseScannerQrCode}
      />
    );

  return (
    <VStack _web={{ px: 20, maxW: 1200 }} flex={1}>
      {/* <KeyboardAvoidingView
        behavior={platformIOS ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={platformIOS ? 0 : 4}
      > */}
      <ScrollView>
        <Stack flex={1} p={2} _web={{ flex: 5 }}>
          <SearchNumberCaf handleOpenScannerQrCode={handleOpenScannerQrCode} />

          <Divider />

          <BaseCondition />

          <Divider />

          <InventoryNumber />

          <Divider />

          <CurrentNumberOfBlows />

          <Divider />

          <LabelAndProduction />

          <Divider />

          <Photos
            listPhotos={listPhotos}
            handleOpenCamera={__handleOpenCamera}
          />

          <ActionsButtons />
        </Stack>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </VStack>
  );
}

const styles = StyleSheet.create({
  camera: {
    zIndex: 10,
    ...StyleSheet.absoluteFillObject,
  },
});
