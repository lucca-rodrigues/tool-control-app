import AsyncStorage from "@react-native-async-storage/async-storage";
const tokenName = "@Tool_control:token";

export const getToken = () => AsyncStorage.getItem(tokenName);

export const setToken = (token: string) =>
  AsyncStorage.setItem(tokenName, token);

export const clearToken = () => {
  AsyncStorage.removeItem(tokenName);
  AsyncStorage.removeItem("@Tool_control:loggedUser");
};
