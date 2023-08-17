import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Image, Pressable, Text, useTheme } from "native-base";
import { useNavigatorContext } from "../contexts";
import { HomeScreen } from "../screens";

import { Home, LogoPoweredBy, Notifications } from "../../assets/images";

export const TabsNavigator = () => {
  const Tab = createBottomTabNavigator();
  const { navigateTo } = useNavigatorContext();

  const { colors } = useTheme();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          unmountOnBlur: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            elevation: 0,
            borderTopWidth: 1,
            borderTopColor: colors.success[50],
          },
        }}
        initialRouteName="HomeTabs"
      >
        <Tab.Screen
          name="HomeTabs"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Button
                bgColor={"#f1f5f4"}
                borderRadius={150}
                h={37}
                w={37}
                onPress={() => navigateTo("home")}
              >
                <Image
                  source={Home}
                  alt={"Alt Image"}
                  resizeMode="center"
                  size="xs"
                />
              </Button>
            ),
          }}
        />
        <Tab.Screen
          name="poweredBy"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Pressable>
                <Image
                  source={LogoPoweredBy}
                  alt={"Alt Image"}
                  resizeMode="contain"
                  size="lg"
                />
              </Pressable>
            ),
          }}
        />
        <Tab.Screen
          name="HomeTabsss"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Button
                bgColor={"#f1f5f4"}
                borderRadius={150}
                h={37}
                w={37}
                onPress={() =>
                  console.log("Redirecionar para Notificacões", { focused })
                }
              >
                <Image
                  source={Notifications}
                  alt={"Alt Image"}
                  resizeMode="center"
                  size="xs"
                />
              </Button>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
