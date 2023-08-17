import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  InventoryScreen,
  InventoryClosureScreen,
  RetoolingScreen,
  RetoolingItemsScreen,
  RetoolingDetailsScreen,
  RetoolingApprovedScreen,
  RetoolingItemsReviewScreen,
  EnterCodeScreen,
} from "../screens";
import { useAuthContext } from "../contexts";
import { DrawerNavigatorRight } from "./drawerNavigatorRight";

export const StackNavigator = () => {
  const Stack = createStackNavigator();
  const { isLoggedUser } = useAuthContext();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isLoggedUser ? "HomeScreen" : "AuthScreen"}
      >
        {isLoggedUser && (
          <>
            {/** To render screens on desktop insert manualy screens here */}
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
            <Stack.Screen
              name="InventoryClosureScreen"
              component={InventoryClosureScreen}
            />
            <Stack.Screen name="RetoolingScreen" component={RetoolingScreen} />
            <Stack.Screen
              name="RetoolingItemsScreen"
              component={RetoolingItemsScreen}
            />
            <Stack.Screen
              name="RetoolingDetailsScreen"
              component={RetoolingDetailsScreen}
            />
            <Stack.Screen
              name="RetoolingApprovedScreen"
              component={RetoolingApprovedScreen}
            />
          </>
        )}

        <Stack.Screen name="AuthScreen" component={LoginScreen} />
        <Stack.Screen
          name="RetoolingItemsReviewScreen"
          component={RetoolingItemsReviewScreen}
        />
        <Stack.Screen name="EnterCodeScreen" component={EnterCodeScreen} />

        {/**This componente render right sidebar menu */}
        <Stack.Screen
          name="DrawerNavigatorRight"
          component={DrawerNavigatorRight}
        />
      </Stack.Navigator>
    </>
  );
};
