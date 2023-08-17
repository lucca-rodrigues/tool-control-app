import { useEffect } from "react";
import { Platform } from "react-native";
import { useAuthContext } from "../contexts";
import { DrawerNavigator } from "./drawerNavigator";
import { StackNavigator } from "./stackNavigator";
import { platformWeb } from "../utils";
import { DrawerNavigatorRight } from "./drawerNavigatorRight";
import { DrawerNavigatorRetooling } from "./drawerNavigatorRetooling";

export const MainNavigator = () => {
  const { isLoggedUser } = useAuthContext();

  return (
    <>
      {(!platformWeb && (
        <>{isLoggedUser ? <DrawerNavigatorRetooling /> : <StackNavigator />}</>
      )) || <StackNavigator />}
    </>
  );
};
