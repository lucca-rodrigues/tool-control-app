import { ScrollView, StyleSheet } from "react-native";
import { HStack } from "native-base";
import { ButtonPreviewPhoto, IListPhotos } from "../../../../components";

interface IPhotos {
  listPhotos: IListPhotos[];
  handleOpenCamera: (namePhoto: string) => void;
}

export function Photos({ listPhotos = [], handleOpenCamera }: IPhotos) {
  return (
    <>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        alwaysBounceHorizontal
        automaticallyAdjustContentInsets
      >
        <HStack space={4} overflowX="auto">
          {listPhotos.map((item) => (
            <ButtonPreviewPhoto handleOpenCamera={handleOpenCamera} {...item} />
          ))}
        </HStack>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 4,
  },
});
