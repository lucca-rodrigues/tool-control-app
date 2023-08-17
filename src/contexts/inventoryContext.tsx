import { useContext, createContext, useState, useCallback } from "react";

import {
  getInventoryService,
  getInventoryItemsService,
} from "../services/inventoryService";

interface IInventoryContext {
  inventoryData: any;
  getInventoryData: () => void;
}
const InventoryContext = createContext({} as IInventoryContext);

const InventoryContextProvider = ({ children }: any) => {
  const [inventoryData, setInventoryData] = useState<any>([]);

  const id = 1;
  const getInventoryData = useCallback(async () => {
    const data = await getInventoryService(id);

    if (data?.status) setInventoryData(data?.result);
  }, []);

  return (
    <InventoryContext.Provider
      value={{
        inventoryData,
        getInventoryData,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

const useInventoryContext = () => {
  return useContext(InventoryContext);
};

export { InventoryContextProvider, useInventoryContext };
