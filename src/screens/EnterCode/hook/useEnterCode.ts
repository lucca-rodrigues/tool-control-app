import { useState } from "react";
import { Camera, CameraCapturedPicture, FlashMode } from "expo-camera";
import { Alert } from "react-native";

export interface IListPhotos {
  uri: string;
  namePhoto: string;
}

export function useEnterCode() {
  const [openCamera, setOpenCamera] = useState(false);
  const [currentNamePhoto, setCurrentNamePhoto] = useState<string>("");
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] =
    useState<CameraCapturedPicture | null>(null);
  const [flashMode, setFlashMode] = useState(FlashMode.off);

  const [listPhotos, setListPhotos] = useState<IListPhotos[]>([
    {
      namePhoto: "Foto CAF",
      uri: "",
    },
    {
      namePhoto: "Foto 02",
      uri: "",
    },
    {
      namePhoto: "Foto 03",
      uri: "",
    },
    {
      namePhoto: "Foto 04",
      uri: "",
    },
  ]);

  const __removePhoto = (namePhoto: string) => {
    const index = listPhotos.findIndex((item) => item.namePhoto === namePhoto);

    if (index === -1) return;

    listPhotos[index].uri = "";
    setListPhotos([...listPhotos]);
  };

  const __handleOpenCamera = (namePhoto: string) => {
    __removePhoto(namePhoto);

    setOpenCamera(true);
    setCurrentNamePhoto(namePhoto);
  };

  const __handleCloseCamera = () => {
    setOpenCamera(false);
    setCurrentNamePhoto("");
  };

  const __handleSavePhotos = (uri: string) => {
    const index = listPhotos.findIndex(
      (item) => item.namePhoto === currentNamePhoto
    );
    listPhotos[index].uri = uri;

    setListPhotos([...listPhotos]);

    __handleCloseCamera();
    setOpenCamera(false);
  };

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

  const __takePicture = async (camera: Camera) => {
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
      __handleSavePhotos(capturedImage?.uri);

      __clearPhotos();
    }
  };

  return {
    openCamera,
    listPhotos,
    previewVisible,
    capturedImage,
    flashMode,
    __handleOpenCamera,
    __handleSavePhotos,
    __handleCloseCamera,
    __savePhoto,
    __retakePicture,
    __handleFlashMode,
    __takePicture,
    __startCamera,
    __clearPhotos,
    setPreviewVisible,
    setCapturedImage,
  };
}
