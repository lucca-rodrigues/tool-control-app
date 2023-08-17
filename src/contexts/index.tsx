import React from "react";
import { AuthContextProvider } from "./authContext";
import { FormContextProvider } from "./formContext";
import { ProviderContextProvider } from "./providerContext";
import { InventoryContextProvider } from "./inventoryContext";

export * from "./authContext";
export * from "./formContext";
export * from "./navigatorContext";
export * from "./providerContext";
export * from "./inventoryContext";

export const AppProvider = ({ children }: any) => {
  return (
    <FormContextProvider>
      <ProviderContextProvider>
        <AuthContextProvider>
          <InventoryContextProvider>{children}</InventoryContextProvider>
        </AuthContextProvider>
      </ProviderContextProvider>
    </FormContextProvider>
  );
};
