import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { theme } from "./src/styles/theme";
import { AppProvider, NavigatorContextProvider } from "./src/contexts";
import { MainNavigator } from "./src/navigation/mainNavigator";
import { LogBox } from "react-native";
import { useEffect, useState } from "react";
import { platformWeb } from "./src/utils";
import { LoaderApp } from "./src/components";
export default function App() {
  const [loading, setLoading] = useState(true);
  LogBox.ignoreAllLogs();

  useEffect(() => {
    if (!platformWeb) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    setLoading(false);
  }, []);

  return (
    <SafeAreaProvider>
      {/* <StatusBar /> */}
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <NavigatorContextProvider>
            <AppProvider>
              {loading ? <LoaderApp /> : <MainNavigator />}
            </AppProvider>
          </NavigatorContextProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
