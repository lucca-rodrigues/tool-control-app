import { IconButton, Text, VStack, useTheme } from "native-base";
import { ImageBackground, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface IButtonPreviewPhoto {
  uri?: string;
  namePhoto?: string;
  handleOpenCamera: (namePhoto: string) => void;
  sizeBox?: number;
}

export function ButtonPreviewPhoto({
  uri,
  namePhoto,
  handleOpenCamera,
  sizeBox = 70,
}: IButtonPreviewPhoto) {
  const { colors } = useTheme();

  const elementTextNamePhoto = (
    <Text fontWeight={700} fontSize={13} color={colors.black}>
      {namePhoto}
    </Text>
  );

  if (uri) {
    return (
      <VStack alignItems="center" space={1}>
        {elementTextNamePhoto}
        <TouchableOpacity
          style={{
            flex: 1,
            width: sizeBox,
            height: sizeBox,
            marginTop: "auto",
          }}
          onPress={() => namePhoto && handleOpenCamera(namePhoto)}
        >
          <ImageBackground
            style={{
              flex: 1,
              width: sizeBox,
              height: sizeBox,
              marginTop: "auto",
            }}
            source={{ uri: uri }}
          />
        </TouchableOpacity>
      </VStack>
    );
  }

  return (
    <VStack alignItems="center" space={1}>
      {elementTextNamePhoto}
      <IconButton
        maxW={sizeBox}
        maxH={sizeBox}
        mt={"auto"}
        backgroundColor="primary.600"
        _hover={{ backgroundColor: "primary.700" }}
        onPress={() => namePhoto && handleOpenCamera(namePhoto)}
        icon={<MaterialIcons name="photo-camera" size={50} color="white" />}
      />
    </VStack>
  );
}
