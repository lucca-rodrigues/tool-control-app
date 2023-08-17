import { handleScreeName } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { useContext, createContext, useCallback, useState } from "react";

interface INavigatorContext {
  navigateTo: (path: string) => void;
  screenName: string;
  navigation: any;
  navigateToPrevPage: () => any;
}

const NavigatorContext = createContext({} as INavigatorContext);

const NavigatorContextProvider = ({ children }: any) => {
  const navigation = useNavigation<any>();
  const [screenName, setScreenName] = useState("Menu Principal");

  const navigateTo = useCallback((path: any) => {
    setScreenName(handleScreeName(path));
    navigation.navigate(path);
  }, []);

  function navigateToPrevPage() {
    switch (screenName) {
      case "Digitar Código":
        return navigateTo("InventoryScreen");
      case "Retooling - Selecionar Itens":
        return navigateTo("RetoolingScreen");
      case "Retooling - Selecionar Itens":
        return navigateTo("RetoolingScreen");

      default:
        return navigateTo("home");
    }
  }

  return (
    <NavigatorContext.Provider
      value={{
        navigateTo,
        screenName,
        navigation,
        navigateToPrevPage,
      }}
    >
      {children}
    </NavigatorContext.Provider>
  );
};

const useNavigatorContext = () => {
  return useContext(NavigatorContext);
};

export { NavigatorContextProvider, useNavigatorContext };
