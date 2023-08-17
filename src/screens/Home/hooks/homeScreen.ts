import {
  useAuthContext,
  useInventoryContext,
  useNavigatorContext,
  useProviderContext,
} from "../../../contexts";
import { getPercentageValues } from "../../../utils";

export default function homeScreenHooks() {
  const { signOut } = useAuthContext();
  const { navigateTo } = useNavigatorContext();
  const { filteredProvider } = useProviderContext();
  const { inventoryData } = useInventoryContext();

  function validateAndHandleLogout(screenName: string) {
    if (screenName === "AuthScreen") {
      signOut();
    }
    return navigateTo(screenName);
  }

  const chartData = [
    {
      quantity: inventoryData?.totalItens ?? 100,
      color: "#00B050",
    },
    {
      quantity: inventoryData?.completedItens ?? 0,
      color: "#F00",
    },
  ];

  const statusInventory = getPercentageValues(
    inventoryData?.completedItens,
    inventoryData?.totalItens
  );

  return {
    validateAndHandleLogout,
    filteredProvider,
    inventoryData,
    chartData,
    statusInventory,
  };
}
