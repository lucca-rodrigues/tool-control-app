import {
  useContext,
  createContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormContext } from "./formContext";
import { getProvidersService } from "../services/providersService";

export type TProviderData = {
  id: number;
  name: string;
  group: string;
};

interface IProviderContext {
  currentProvider: string;
  getCurrentProvider: () => void;
  getProvidersData: () => any;
  providerData: TProviderData[] | [];
  provider: string;
  filteredProvider: any;
}
const ProviderContext = createContext({} as IProviderContext);

const ProviderContextProvider = ({ children }: any) => {
  // const [currentProvider, setCurrentProvider] = useState<string>("");
  const [currentProvider, setCurrentProvider] = useState<any>();
  const { watchFields } = useFormContext();
  const { provider } = watchFields;
  const [providerData, setProviderData] = useState<TProviderData[] | []>([]);

  const filteredProvider =
    (providerData && providerData?.find((item) => item?.name === provider)) ??
    providerData[0];

  const getProvidersData = useCallback(async () => {
    const data = await getProvidersService();
    if (data?.status) setProviderData(data?.result);
  }, []);

  const getCurrentProvider = useCallback(async () => {
    const selectedProvider = await AsyncStorage.getItem(
      "@Tool_control:currentProvider"
    );

    if (selectedProvider) {
      setCurrentProvider(selectedProvider);
    }
  }, []);

  useMemo(async () => {
    if (provider) {
      await AsyncStorage.setItem("@Tool_control:currentProvider", provider);
      setCurrentProvider(provider);
    }
  }, [provider]);

  return (
    <ProviderContext.Provider
      value={{
        currentProvider,
        getCurrentProvider,
        getProvidersData,
        providerData,
        provider,
        filteredProvider,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

const useProviderContext = () => {
  return useContext(ProviderContext);
};

export { ProviderContextProvider, useProviderContext };
