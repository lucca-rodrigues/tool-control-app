import {
  LoginScreen,
  RetoolingScreen,
  RetoolingItemsScreen,
  RetoolingDetailsScreen,
  RetoolingInProgressScreen,
  RetoolingApprovedScreen,
  InventoryClosureScreen,
  InventoryScreen,
  HomeScreen,
  EnterCodeScreen,
  RetoolingItemsReviewScreen,
} from "../screens";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, Stack, Text, useTheme, View } from "native-base";
import { TabsNavigator } from "./tabNavigator";
import { Divider, HeaderApp, SelectProvider } from "../components";
import { Logoff, UpdateProvider } from "../../assets/images";
import homeScreenHooks from "../screens/Home/hooks/homeScreen";
import { DrawerNavigatorRight } from "./drawerNavigatorRight";
import navigationHooks from "./hook";
import { menuOptions } from "../utils";
import { DrawerNavigatorRetooling } from "./drawerNavigatorRetooling";

export const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const { colors } = useTheme();
  const { validateAndHandleLogout } = homeScreenHooks();
  const { includeItems } = navigationHooks();

  const drawerOptions = [
    {
      label: "Logoff",
      icon: Logoff,
      screenName: "AuthScreen",
    },
    {
      label: "Trocar de Fornecedor",
      icon: UpdateProvider,
      screenName: null,
    },
  ];

  return (
    <Drawer.Navigator
      id="DefaultDrawer"
      screenOptions={{
        headerShown: true,

        header: () => <HeaderApp />,
      }}
      useLegacyImplementation
      drawerContent={(props: any) => (
        // <View flex={1} bg="#BFBFFF" px={5}>
        <View flex={1} bg="#243783" px={5}>
          <Stack h={200}>
            <DrawerContentScrollView {...props}>
              {drawerOptions?.map(({ label, icon, screenName }, index) => (
                <View key={index}>
                  <DrawerItem
                    label={() => <Text color={colors.white}>{label}</Text>}
                    icon={() => (
                      <Image
                        source={icon}
                        alt="Update provider icon"
                        resizeMode="contain"
                        size="xs"
                      />
                    )}
                    onPress={() =>
                      screenName && validateAndHandleLogout(screenName)
                    }
                  />
                  {screenName && <Divider />}
                </View>
              ))}
            </DrawerContentScrollView>
            <Stack>
              <SelectProvider whiteMode />
            </Stack>
          </Stack>
        </View>
      )}
    >
      <Drawer.Screen name="home" component={HomeScreen} />
      {/* <Drawer.Screen name="home" component={TabsNavigator} /> */}
      {/* <Drawer.Screen name="rightDrawer" component={DrawerNavigatorRight} /> */}
      <Drawer.Screen name="AuthScreen" component={LoginScreen} />

      <Drawer.Screen name="RetoolingScreen" component={RetoolingScreen} />
      <Drawer.Screen
        name="RetoolingInProgressScreen"
        component={RetoolingInProgressScreen}
      />
      <Drawer.Screen
        name="RetoolingApprovedScreen"
        component={RetoolingApprovedScreen}
      />
      <Drawer.Screen
        name="InventoryClosureScreen"
        component={InventoryClosureScreen}
      />
      <Drawer.Screen
        name="RetoolingItemsScreen"
        component={RetoolingItemsScreen}
      />
      <Drawer.Screen
        name="RetoolingDetailsScreen"
        component={RetoolingDetailsScreen}
      />
      <Drawer.Screen name="InventoryScreen" component={InventoryScreen} />
      <Drawer.Screen name="EnterCodeScreen" component={EnterCodeScreen} />
      <Drawer.Screen
        name="RetoolingItemsReviewScreen"
        component={RetoolingItemsReviewScreen}
      />
    </Drawer.Navigator>
  );
};
