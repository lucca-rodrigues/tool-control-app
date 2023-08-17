import { BottomNavigation, Loader, TemplateWebPages } from "../../components";
import { Center, Image, Pressable, VStack } from "native-base";
import { HomeMobileNavigation } from "./components/HomeMobileNavigation";
import { CurrentProvider } from "./components/CurrentProvider";
import { useEffect } from "react";
import {
  useAuthContext,
  useInventoryContext,
  useProviderContext,
} from "../../contexts";
import { platformWeb } from "../../utils";
import homeScreenHooks from "./hooks/homeScreen";
import { LogoPoweredBy } from "../../../assets/images";

export const HomeScreen = () => {
  const { getCurrentProvider, getProvidersData } = useProviderContext();
  const { getInventoryData } = useInventoryContext();
  const { filteredProvider, inventoryData, chartData } = homeScreenHooks();
  const { isLoggedUser } = useAuthContext();

  if (isLoggedUser) {
    useEffect(() => {
      getCurrentProvider();
      getProvidersData();
    }, []);

    useEffect(() => {
      getInventoryData();
    }, []);
  }

  console.log("isLoggedUser:", isLoggedUser);

  if (!chartData || !filteredProvider || !inventoryData) {
    return <Loader />;
  }

  return (
    <VStack flex={1}>
      {platformWeb ? (
        <TemplateWebPages>
          <Center>
            <Pressable>
              <Image
                source={LogoPoweredBy}
                alt={"Alt Image"}
                resizeMode="contain"
                size="lg"
              />
            </Pressable>
            <CurrentProvider />
          </Center>
        </TemplateWebPages>
      ) : (
        <>
          <CurrentProvider />
          <HomeMobileNavigation />
          <BottomNavigation />
        </>
      )}
    </VStack>
  );
};
