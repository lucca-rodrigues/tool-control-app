import {
  Button,
  CardItems,
  Divider,
  Loader,
  TextInputSearch,
} from "../../../../components";
import { Box, Center, Stack, Text, View } from "native-base";
import { useEffect } from "react";
import { useFormContext } from "../../../../contexts";

import { ImageSourcePropType, VirtualizedList } from "react-native";
import inventoryHook from "../../hook/useInventory";

interface IListProps {
  caf: string;
  name: string;
  status: string;
  inventoryId: number;
  image?: ImageSourcePropType;
}

export const Pending = () => {
  const { setValue } = useFormContext();
  const { filteredpendingData, isLoading } = inventoryHook();

  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
      flex={1}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        space={1}
        px={1}
        my={2}
      >
        <TextInputSearch
          placeholder="Pesquisar"
          onChangeText={(value: string) =>
            setValue("searchPending", value?.toUpperCase())
          }
        />
        <Button py={1.5} px={5} label="Filtrar" onPress={() => {}} />
      </Stack>
      <Divider />

      {!isLoading && !filteredpendingData.length && (
        <Center flex={1}>
          <Text fontWeight="bold">
            Nenhuma informação de inventário encontrada!
          </Text>
        </Center>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <VirtualizedList
          data={filteredpendingData}
          initialNumToRender={4}
          getItemCount={(data: IListProps[]) => data?.length}
          getItem={(data, index) => data[index]}
          keyExtractor={(item: IListProps) => item?.caf}
          renderItem={({ item }) => (
            <>
              <Box px={4} py={2}>
                <CardItems success {...item} />
              </Box>
              <Divider />
            </>
          )}
        />
      )}
    </View>
  );
};
