import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Alert,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Camera, CameraCapturedPicture, FlashMode } from "expo-camera";
import { Button } from "../Button";
import { HStack } from "native-base";
import { useEnterCode } from "../../screens/EnterCode/hook/useEnterCode";

export interface IListPhotos {
  uri: string;
  namePhoto: string;
}

export interface ICameraCustom {
  handleSavePhotos: (photo: string) => void;
  handleCloseCamera: () => void;
}

export function CameraCustom({
  handleSavePhotos,
  handleCloseCamera,
}: ICameraCustom) {
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] =
    useState<CameraCapturedPicture | null>(null);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  let camera: Camera | null = null;

  const __clearPhotos = () => {
    setPreviewVisible(false);
    setCapturedImage(null);
    setFlashMode(FlashMode.off);
  };

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      // start the camera
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();

    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };

  const __handleFlashMode = () => {
    if (flashMode === "off") {
      return setFlashMode(FlashMode.on);
    }
    setFlashMode(FlashMode.off);
  };

  const __savePhoto = async () => {
    if (capturedImage?.uri) {
      handleSavePhotos(capturedImage?.uri);

      __clearPhotos();
    }
  };

  const CameraPreview = ({ photo, retakePicture, savePhoto }: any) => {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          position: "relative",
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{ flex: 1 }}
        />
        <HStack position="absolute" bottom={8} px={8} space={2}>
          <Button
            flex={1}
            py={1.5}
            px={5}
            label="Descartar"
            backgroundColor="#BFBFBF"
            onPress={() => retakePicture()}
          />
          <Button
            flex={1}
            py={1.5}
            px={5}
            label="Salvar"
            onPress={() => savePhoto()}
          />
        </HStack>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
        <CameraPreview
          photo={capturedImage}
          retakePicture={__retakePicture}
          savePhoto={__savePhoto}
        />
      ) : (
        <Camera
          flashMode={flashMode}
          style={{ flex: 1 }}
          ref={(r) => {
            camera = r;
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              margin: 5,
            }}
          >
            <Button w={10} label={"X"} onPress={handleCloseCamera} />
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                flex: 1,
                width: "100%",
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ alignSelf: "center", flex: 1, alignItems: "center" }}
              >
                <HStack space={2}>
                  <Button
                    flex={1}
                    py={1.5}
                    px={5}
                    label={flashMode === "on" ? "Flash on" : "Flash off"}
                    onPress={__handleFlashMode}
                  />
                  <Button
                    flex={1}
                    py={1.5}
                    px={5}
                    label="Foto"
                    onPress={__takePicture}
                  />
                </HStack>
              </View>
            </View>
          </View>
        </Camera>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
