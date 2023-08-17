import {
  Button,
  Pagination,
  TabCustom as TabCustomInventory,
  TabsHeader,
} from "../../../../components";
import { Stack, useTheme, View } from "native-base";
import { useTabInventory } from "../../hook/useTabInventory";
import { useNavigatorContext } from "../../../../contexts";
import { useEffect } from "react";
import inventoryHook from "../../hook/useInventory";

export const Content = () => {
  const { navigateTo } = useNavigatorContext();
  const { index, routes, setIndex } = useTabInventory();
  const {
    setCurrentTab,
    offset,
    handleNextPage,
    handlePrevPage,
    handleChangeOffset,
    limitPages,
    setIsLoading,
  } = inventoryHook();
  const { colors } = useTheme();

  useEffect(() => {
    if (index >= 0) {
      setCurrentTab(index);
      setIsLoading(true);
    }
  }, [index]);

  return (
    <View
      flex={1}
      _web={{
        maxW: 1100,
        mt: 100,
        px: 10,
      }}
    >
      <TabsHeader />
      <View
        style={{
          backgroundColor: "#dee1e6",
          paddingTop: 10,
        }}
        flex={1}
      >
        <TabCustomInventory
          index={index}
          setIndex={setIndex}
          routes={routes}
          listRenderTabs={routes}
        />
      </View>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        bg={colors.white}
        space={2}
        py={2}
        px={4}
      >
        <Button
          w="49%"
          alignSelf="center"
          label="LER CÓDIGO QR"
          onPress={() => navigateTo("EnterCodeScreen")}
        />

        <Button
          w="49%"
          alignSelf="center"
          label="ENCERRAR"
          onPress={() => navigateTo("InventoryClosureScreen")}
        />
      </Stack>

      <Pagination
        currentPage={offset}
        limit={limitPages}
        handleNextPage={() => handleNextPage()}
        handlePrevPage={() => handlePrevPage()}
        handleChangeOffset={handleChangeOffset}
      />
    </View>
  );
};
