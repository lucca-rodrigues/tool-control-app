import {
  LoginScreen,
  RetoolingScreen,
  RetoolingInProgressScreen,
  RetoolingApprovedScreen,
  InventoryScreen,
} from "../screens";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, Stack, Text, useTheme, View } from "native-base";

import {
  AddRetooling,
  CancelRetooling,
  SearchRetooling,
} from "../../assets/images";
import { DrawerNavigator } from "./drawerNavigator";
import { DrawerNavigatorRight } from "./drawerNavigatorRight";
import { useNavigatorContext } from "../contexts";

export const DrawerNavigatorRetooling = () => {
  const { navigateTo } = useNavigatorContext();
  const Drawer = createDrawerNavigator();
  const { colors } = useTheme();

  const drawerOptions = [
    {
      label: "Adicionar Novos Itens",
      icon: AddRetooling,
      screenName: "AuthScreen",
    },
    {
      label: "Consultar",
      icon: SearchRetooling,
      screenName: RetoolingInProgressScreen,
    },
    {
      label: "Cancelar Solicitação",
      icon: CancelRetooling,
      screenName: null,
    },
  ];

  return (
    <Drawer.Navigator
      id="RetoolingDrawer"
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "#D9D9D9",
          padding: 0,
          height: 160,
          width: "60%",
          position: "absolute",
          top: 320,
          paddingTop: 10,
          margin: 0,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        },
      }}
      useLegacyImplementation
      drawerContent={(props: any) => (
        <View flex={1}>
          <Stack flex={1}>
            <DrawerContentScrollView {...props}>
              {drawerOptions?.map((item, index) => (
                <DrawerItem
                  key={index}
                  label={() => (
                    <Text color={colors.black} fontWeight="bold" fontSize={13}>
                      {item?.label}
                    </Text>
                  )}
                  icon={() => (
                    <Image
                      source={item?.icon}
                      alt="Update provider icon"
                      resizeMode="center"
                      w={30}
                      h={35}
                    />
                  )}
                  style={{
                    marginTop: -20,
                    marginRight: -25,
                  }}
                  onPress={() =>
                    item?.screenName && navigateTo(item?.screenName)
                  }
                />
              ))}
            </DrawerContentScrollView>
          </Stack>
        </View>
      )}
    >
      <Drawer.Screen name="inventoryDrawer" component={DrawerNavigatorRight} />
      <Drawer.Screen name="homeDrawer" component={DrawerNavigator} />
    </Drawer.Navigator>
  );
};
