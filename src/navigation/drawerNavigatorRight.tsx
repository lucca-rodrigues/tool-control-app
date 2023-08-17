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
  CafNotFound,
  CancelRight,
  Disinvestment,
  Duplicated,
  NotIsBase,
  Third,
  Transfer,
} from "../../assets/images";
import homeScreenHooks from "../screens/Home/hooks/homeScreen";
import { DrawerNavigator } from "./drawerNavigator";
import { DrawerNavigatorRetooling } from "./drawerNavigatorRetooling";

export const DrawerNavigatorRight = () => {
  const Drawer = createDrawerNavigator();
  const { colors } = useTheme();

  const drawerOptions = [
    {
      label:
        "Cancelar Registro de Inventário Voltar para PLANEJADO (necessita de Justificativa)",
      icon: CancelRight,
      screenName: "AuthScreen",
    },
    {
      label: "CAF não localizado",
      icon: CafNotFound,
      screenName: null,
    },
    {
      label: "CAF não está na base",
      icon: NotIsBase,
      screenName: null,
    },
    {
      label: "CAF duplicado",
      icon: Duplicated,
      screenName: null,
    },
    {
      label: "CAF Terceirizado",
      icon: Third,
      screenName: null,
    },
    {
      label: "Desinvestido no Ano",
      icon: Disinvestment,
      screenName: null,
    },
    {
      label: "Comodatário Transferido",
      icon: Transfer,
      screenName: null,
    },
  ];

  return (
    <Drawer.Navigator
      id="InventoryDrawer"
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "#c6cbef",
          padding: 0,
          height: "52%",
          width: "80%",
          position: "absolute",
          top: 200,
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
                      h={33}
                    />
                  )}
                  style={{
                    marginTop: -10,
                    marginRight: -25,
                  }}
                  onPress={() => {}}
                />
              ))}
            </DrawerContentScrollView>
          </Stack>
        </View>
      )}
    >
      <Drawer.Screen name="homeDrawer" component={DrawerNavigator} />
      <Drawer.Screen
        name="retoolingDrawer"
        component={DrawerNavigatorRetooling}
      />
    </Drawer.Navigator>
  );
};
