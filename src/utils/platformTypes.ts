import { Platform } from "react-native";

export const platformWeb = Platform.OS === "web";
export const platformIOS = Platform.OS === "ios";
export const platformAndroid = Platform.OS === "android";
